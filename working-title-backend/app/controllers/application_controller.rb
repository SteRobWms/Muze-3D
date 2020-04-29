class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    before_action :logged_in?

    private
    
    def logged_in?
        
    end

end
