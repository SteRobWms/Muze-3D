class MuseumsController < ApplicationController
    before_action :set_current_museum, only: [:show, :edit, :update, :destroy]

    def index
        @museums = Museum.all
        render json: @museums
    end

    def show
        @user = User.find(@museum.user_id).username
        render json: @museum
    end

    def new
    end

    def create
        @museum = Museum.create(museum_params)
        render json: @museum
    end

    def edit
        render json: @museum
    end

    def update
        render json: @museum
    end

    def destroy
        @museum.destroy
    end

    private

    def museum_params
        params.require(:museum).permit(:name, :user_id)
    end

    def set_current_museum
        @museum = Museum.find(params[:id])
    end

end
