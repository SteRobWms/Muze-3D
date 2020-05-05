class UsersController < ApplicationController

    before_action :logged_in?, only: [:profile]
    # before_action :set_current_user, only: [:show, :destroy]
    
    def index
        @users = User.all 
        render json: @users
    end

    def profile
        render json: @user
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def new
    end

    def create
        user = User.new(user_params)
        if user.valid?
            user.save
            render json: {user: UserSerializer.new(user)}, status: :created
        elsif User.find_by(username: user_params[:username])
            render json: {error: "Username is taken"}, status: :not_acceptable
        else
            render json: {error: "Something went wrong. Please try again."}
        end
    end

    def edit
        render json: @user
    end

    def update
        setUser
        # byebug
        @user.update(user_params)
        render json: @user
    end

    def destroy
        @user.destroy
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :bio)
    end

    def set_current_user
        @user = User.find(params[:id])
    end

end
