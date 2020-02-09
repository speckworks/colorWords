Rails.application.routes.draw do
  resources :userquotes, only: [:index, :update, :create, :destroy]
  resources :quotes, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # routes to get  
  # Get "/userquotes", to: "userquotes#index"
  # Post "/userquotes", to: "userquotes#index"
  # Patch "/userquotes", to: "userquotes#index"
  # Delete "userquotes", to: "userquotes#index"

  # routes to get quotes from seed file
  # get "/quotes", to: "quotes#index"
  # get "/quotes/:id", to "quotes#show"

  




end

