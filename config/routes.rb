Rails.application.routes.draw do
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index]
  resources :reservations, only: [:create, :show, :index]
  get '/myreservations/', to: 'reservations#myReservations'
  # post 'reservations/(.:q)', to: 'reservations#show' 
end