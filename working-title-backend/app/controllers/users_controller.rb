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
        @user = User.create(user_params)
        render json: @user
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
        params.require(:user).permit(:username, :bio)
    end

    def set_current_user
        @user = User.find(params[:id])
    end

end
