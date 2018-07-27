Rails.application.routes.draw do
  namespace :api do
    resources :rides
    resources :users do
      resources :rides
    end
  end
end
