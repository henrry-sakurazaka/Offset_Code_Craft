Rails.application.routes.draw do
  # メインページ
  root "pages#home"
  get "home", to: "pages#home"
  get "about", to: "pages#about"
  get "contact", to: "pages#contact"
  get "pages/complete", to: "pages#complete"

  # アーキテクチャ紹介
  get "architex/home"

  # Contacts 関連（new, create, complete）
  get "contacts/new", to: "contacts#new"
  post "contacts/create", to: "contacts#create"
  get "contacts/complete", to: "contacts#complete_contact", as: :complete_contact
  # config/routes.rb
  post "submit_contact", to: "contacts#create", as: :submit_contact

  # Health Check
  get "up" => "rails/health#show", as: :rails_health_check
end
