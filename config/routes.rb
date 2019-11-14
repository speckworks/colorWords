Rails.application.routes.draw do
  resources :userquotes, only: [:index, :create, :destroy, :show]
  resources :quotes, only: [:index, :create, :destroy, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end

