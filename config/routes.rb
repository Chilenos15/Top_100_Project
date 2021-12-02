Rails.application.routes.draw do
  # route is going to be the http request and do crud actions in the the browser
  # lead somewhere in the controller 
  # combo url + http request

  # root 'controller#action' - home page to the url pattern
  # root 'static#home'
  # resources :controller - gen all the routes and actions for a controller
  # resources :contacts
  # - with relationships with models you are going to embed two levels deep
  # resources :contacts do 
  #   resources :notes
  # end

  # bad 
  # resources :contacts do 
  #   resources :notes do 
  #     resources :comments 
  #   end
  # end

  # best practice 
  # resources :contacts do 
  #   resources :notes
  # end

  # resources :notes  do
  #   resources :comments
  # end
  # custom routes - doing the routes  by hand 
  # httpverb 'pattern', to: 'controller#action'
  # get        Read
  # post        create
  # put / patch  update
  # delete       destroy
  # get '/contacts', to: 'contacts#index'
  # /billboards/:id
  # /billboards/:parent_id
  # pass in a id for the route to work
  # billboards/2
  root 'billboards#index'

  resources :billboards do 
    resources :artists
  end

  # bad 
  # resources :billboards do 
  #   resources :artists do
  #     resources :comments
  #   end
  # end
  # resources :artists, only: [:index, :new] do
  #   resources :comments
  # end
  resources :artists, except: [:index, :new, :create, :edit, :show, :update, :destroy] do
    resources :comments
  end
end
