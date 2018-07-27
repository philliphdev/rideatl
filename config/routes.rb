Rails.application.routes.draw do
  namespace :api do
    resources :rides
    resources :bikes
    resources :users do
      resources :rides
      resources :bikes
    end
  end
end
