begin
  require "posix-spawn"
rescue LoadError
  require "open3"
end

require "github/markup/implementation"

module GitHub
  module Markup
    class CommandError < RuntimeError
    end

    class CommandImplementation < Implementation
      attr_reader :command, :block, :name

      def initialize(regexp, command, name, &block)
        super regexp
        @command = command.to_s
        @block = block
        @name = name
      end

      def render(content)
        rendered = execute(command, content)
        rendered = rendered.to_s.empty? ? content : rendered
        call_block(rendered, content)
      end

    private
      def call_block(rendered, content)
        if block && block.arity == 2
          block.call(rendered, content)
        elsif block
          block.call(rendered)
        else
          rendered
        end
      end

      if defined?(POSIX::Spawn)
        def execute(command, target)
          spawn = POSIX::Spawn::Child.new(*command, :input => target)
          if spawn.status.success?
            sanitize(spawn.out, target.encoding)
          else
            raise CommandError.new(spawn.err.strip)
          end
        end
      else
        def execute(command, target)
          stdout_str, stderr_str, status = Open3.capture3(*command, stdin_data: target)
          if status.success?
            sanitize(stdout_str, target.encoding)
          else
            raise CommandError.new(stderr_str.strip)
          end
        end
      end

      def sanitize(input, encoding)
        input.gsub("\r", '').force_encoding(encoding)
      end

    end
  end
end
