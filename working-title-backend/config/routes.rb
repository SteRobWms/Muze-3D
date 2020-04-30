Rails.application.routes.draw do

  resources :users, :museums, :exhibits, :items, :favorite_exhibits, :favorite_museums

  post "/login", to: "auth#create"
#   get "/membersonly", to: "auth#check"
end
