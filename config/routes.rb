# Rails.application.routes.draw do
#   root "pages#home", as: :home

#   get "home", to: "pages#home", as: :home
#   get "about", to: "pages#about", as: :about
#   get "contact", to: "pages#contact", as: :contact

#   # 送信完了画面
#   get "contacts/complete", to: "contacts#complete_contact", as: :complete_contact

#   # フォーム送信
#   post "submit_contact", to: "contacts#create", as: :submit_contact
#   post "contacts/create", to: "contacts#create" 
#   get "architex/home", to: "architex#home", as: :architex_home

#   get "up", to: "rails/health#show", as: :rails_health_check
# end

Rails.application.routes.draw do
  root "pages#home"

  get "about", to: "pages#about", as: :about
  get "contact", to: "pages#contact", as: :contact

  get "contacts/complete", to: "contacts#complete_contact", as: :complete_contact

  post "contacts", to: "contacts#create", as: :submit_contact

  get "architex/home", to: "architex#home", as: :architex_home

  get "up", to: "rails/health#show", as: :rails_health_check
end
