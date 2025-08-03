Rails.application.routes.draw do
  root "pages#home"

  get 'pages/home', to: 'pages#home', as: :pages_home
  get 'pages/about', to: 'pages#about', as: :pages_about
  get 'pages/contact', to: 'pages#contact', as: :pages_contact
  get 'pages/complete', to: 'pages#complete', as: :pages_complete

  get 'contacts/new', to: 'contacts#new', as: :contacts_new
  post 'submit_contact', to: 'contacts#create', as: :submit_contact
  post "contacts/create", to: "contacts#create"
  get 'contacts/complete', to: 'contacts#complete', as: :contacts_complete

  get 'architex/home', to: 'architex#home', as: :architex_home

  get "up" => "rails/health#show", as: :rails_health_check
end
