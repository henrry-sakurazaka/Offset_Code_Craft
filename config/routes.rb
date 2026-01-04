Rails.application.routes.draw do
  root "pages#home"
  get "about", to: "pages#about"
  get "contact", to: "pages#contact"
  # get "pages/home"
  # get "pages/about"
  # get "pages/contact"
  # get "index/new"
  # get "index/create"
  # get "index/show"
  # get "index/edit"
  # get "index/update"
  # get "index/destroy"
  # get "index/complete"
  get "up" => "rails/health#show", as: :rails_health_check
end
