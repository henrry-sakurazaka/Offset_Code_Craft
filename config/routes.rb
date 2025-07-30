Rails.application.routes.draw do

  root "pages#home"
  get "home", to: "pages#home"
  get "about", to: "pages#about"
  get "contact", to: "pages#contact"
  get "contacts/new"
  get "contacts/create"
   # フォームの送信先（ContactsController#create）
  post 'submit_contact', to: 'contacts#create', as: :submit_contact

  # 送信完了ページの表示（ContactsController#complete）
  get 'contacts/complete', to: 'contacts#complete', as: :complete_contacts
  get "architex/home"
  
  get "up" => "rails/health#show", as: :rails_health_check

  resources :contacts do
  collection do
    get :complete_contact
  end
end

end