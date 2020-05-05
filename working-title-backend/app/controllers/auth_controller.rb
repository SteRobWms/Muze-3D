class AuthController < ApplicationController
    # skip_before_action :logged_in?, only: [:create]

    def create
        user = User.find_by(username: params[:username])

        # bcrypt .authenticate method
        if user && user.authenticate(params[:password])
            # render json: {user: UserSerializer.new(user), token: encode_token({user_id: user.id})}
            render json: {user: user, token: encode_token({user_id: user.id})}
        else
            render json: {error: "Invalid Username or Password"}
        end
    end

    def check
        # render json: {currentUser: @user.username}
    end

end
