Rails.application.routes.draw do

  resources :users, :museums, :exhibits, :items, :favorite_exhibits, :favorite_museums

end
