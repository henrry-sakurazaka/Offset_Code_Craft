# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # すべてのオリジンを許可
    resource '/bgm-app/*', headers: :any, methods: [:get, :post]
  end
end
