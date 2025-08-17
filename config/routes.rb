# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#home'

  get 'home', to: 'pages#home', as: :home
  get 'about', to: 'pages#about', as: :about
  get 'contact', to: 'pages#contact', as: :contact

  get 'contacts/complete', to: 'contacts#complete_contact', as: :complete_contact
  post 'submit_contact', to: 'contacts#create', as: :submit_contact

  # get 'architex/home', to: 'architex#home', as: :architex_home

  get 'up', to: 'rails/health#show', as: :rails_health_check
end
