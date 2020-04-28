class FavoriteMuseumsController < ApplicationController

    before_action :set_current_favorite_museum, only: [:show, :edit, :update, :destroy]

    def index
        @favorite_museums = FavoriteMuseum.all 
        render json: @favorite_museums
    end

    def show
        render json: @favorite_museum
    end

    def new
    end

    def create
        @favorite_museum = FavoriteMuseum.create(favorite_museum_params)
        render json: @favorite_museum
    end

    def edit
        render json: @favorite_museum
    end

    def update
        render json: @favorite_museum
    end

    def destroy
        @favorite_museum.destroy
    end


    # =============
    private

    def favorite_museum_params
        params.require(:favorite_museum).permit(:name, :museum_id)
    end

    def set_current_favorite_museum
        @favorite_museum = FavoriteMuseum.find(params[:id])
    end

end
