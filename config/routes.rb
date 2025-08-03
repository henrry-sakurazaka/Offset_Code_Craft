 Rails.application.routes.draw do
    root "pages#home" # → root_path

    get "about", to: "pages#about", as: :about      # → about_path
    get "contact", to: "pages#contact", as: :contact  # → contact_path

    get "contacts/complete", to: "contacts#complete_contact", as: :complete_contact # → complete_contact_path

    post "contacts", to: "contacts#create", as: :submit_contact  # → submit_contact_path

    get "architex/home", to: "architex#home", as: :architex_home  # → architex_home_path

    get "up", to: "rails/health#show", as: :rails_health_check    # → rails_health_check_path
 end
