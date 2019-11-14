Rails.application.routes.draw do
  resources :userquotes, only: [:index, :update, :create, :destroy]
  resources :quotes, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end

