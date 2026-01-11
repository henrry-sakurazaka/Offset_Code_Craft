# frozen_string_literal: true

# config/initializers/mailjet.rb
Mailjet.configure do |config|
  config.api_key = ENV.fetch('MAILJET_API_KEY', nil)
  config.secret_key = ENV.fetch('MAILJET_SECRET_KEY', nil)
  config.api_version = 'v3.1'
end
