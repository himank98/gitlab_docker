# frozen_string_literal: true

module Gitlab
  class SidekiqLogger < Gitlab::Logger
    def self.file_name_noext
      'sidekiq'
    end
  end
end
