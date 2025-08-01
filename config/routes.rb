Rails.application.routes.draw do
  root "pages#home"
  get "home", to: "pages#home"
  get "about", to: "pages#about"
  get "contact", to: "pages#contact"
  get "contacts/new"
  get "contacts/create"
  # フォームの送信先（ContactsController#create）
  post "submit_contact", to: "contacts#create", as: :submit_contact
  # 送信完了画面
  get "contacts/complete", to: "contacts#complete_contact", as: :complete_contact
  # フォーム送信
  post "submit_contact", to: "contacts#create", as: :submit_contact

  # 送信完了ページの表示（ContactsController#complete）
  get 'contacts/complete', to: 'contacts#complete', as: :complete_contacts
  get "architex/home"
  
  get "up" => "rails/health#show", as: :rails_health_check

  # resources は new, create だけ使うならこうしてもOK（今回は省略でもOK）
  # resources :contacts, only: [:new, :create]
end
