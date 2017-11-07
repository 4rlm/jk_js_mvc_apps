Rails.application.routes.draw do
  resources :tweets, only: [:index, :create]

  root 'tweets#index'
end
