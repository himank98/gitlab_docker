# -*- encoding: utf-8 -*-
# stub: lockbox 0.3.3 ruby lib

Gem::Specification.new do |s|
  s.name = "lockbox".freeze
  s.version = "0.3.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Andrew Kane".freeze]
  s.date = "2020-02-16"
  s.email = "andrew@chartkick.com".freeze
  s.homepage = "https://github.com/ankane/lockbox".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.4".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Modern encryption for Rails".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_development_dependency(%q<carrierwave>.freeze, [">= 0"])
      s.add_development_dependency(%q<combustion>.freeze, [">= 0"])
      s.add_development_dependency(%q<rails>.freeze, [">= 0"])
      s.add_development_dependency(%q<minitest>.freeze, [">= 5"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rbnacl>.freeze, [">= 6"])
      s.add_development_dependency(%q<sqlite3>.freeze, [">= 0"])
      s.add_development_dependency(%q<pg>.freeze, [">= 0"])
      s.add_development_dependency(%q<mysql2>.freeze, [">= 0"])
      s.add_development_dependency(%q<benchmark-ips>.freeze, [">= 0"])
    else
      s.add_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_dependency(%q<carrierwave>.freeze, [">= 0"])
      s.add_dependency(%q<combustion>.freeze, [">= 0"])
      s.add_dependency(%q<rails>.freeze, [">= 0"])
      s.add_dependency(%q<minitest>.freeze, [">= 5"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rbnacl>.freeze, [">= 6"])
      s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
      s.add_dependency(%q<pg>.freeze, [">= 0"])
      s.add_dependency(%q<mysql2>.freeze, [">= 0"])
      s.add_dependency(%q<benchmark-ips>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<carrierwave>.freeze, [">= 0"])
    s.add_dependency(%q<combustion>.freeze, [">= 0"])
    s.add_dependency(%q<rails>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 5"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rbnacl>.freeze, [">= 6"])
    s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
    s.add_dependency(%q<pg>.freeze, [">= 0"])
    s.add_dependency(%q<mysql2>.freeze, [">= 0"])
    s.add_dependency(%q<benchmark-ips>.freeze, [">= 0"])
  end
end
