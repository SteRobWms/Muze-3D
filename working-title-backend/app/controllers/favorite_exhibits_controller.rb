class FavoriteExhibitsController < ApplicationController

    before_action :set_current_favorite_exhibit, only: [:show, :edit, :update, :destroy]

    def index
        @favorite_exhibits = FavoriteExhibit.all 
        render json: @favorite_exhibits
    end

    def show
        render json: @favorite_exhibit
    end

    def new
    end

    def create
        @favorite_exhibit = FavoriteExhibit.create(favorite_exhibit_params)
        render json: @favorite_exhibit
    end

    def edit
        render json: @favorite_exhibit
    end

    def update
        render json: @favorite_exhibit
    end

    def destroy
        @favorite_exhibit.destroy
    end

    
    # =============
    private

    def favorite_exhibit_params
        params.require(:favorite_exhibit).permit(:name, :exhibit_id)
    end

    def set_current_favorite_exhibit
        @favorite_exhibit = FavoriteExhibit.find(params[:id])
    end

end
