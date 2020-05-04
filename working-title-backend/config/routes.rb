Rails.application.routes.draw do

    resources :museums, :exhibits, :items, :favorite_exhibits, :favorite_museums
    resources :users, :only => [:show, :create, :edit, :update, :delete]

    get "/profile", to: "users#show"
    post "/login", to: "auth#create"
    get "/loggedin", to: "application#logged_in?"


end
