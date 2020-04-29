class UsersController < ApplicationController

    before_action :set_current_user, only: [:show, :edit, :update, :destroy]

    def index
        @users = User.all 
        render json: @users
    end

    def show
        render json: @user
    end

    def new
    end

    def create
        user = User.new(user_params)
        if user.valid?
            user.save
            render json: {user: UserSerializer.new(user)}, status: :created
            byebug
        else
            render json: {error: "Failed to create a user"}, status: :not_acceptable
        end
    end

    def edit
        render json: @user
    end

    def update
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
