Rails.application.routes.draw do
  # get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'root#index'
  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      get '/random_greeting', to: 'greetings#random'
    end
  end
end
