Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :buses, only: [:create, :index]
    resources :bookings, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
