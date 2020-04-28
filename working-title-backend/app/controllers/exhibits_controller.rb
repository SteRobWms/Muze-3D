class ExhibitsController < ApplicationController

    before_action :set_current_exhibit, only: [:show, :edit, :update, :destroy]

    def index
        @exhibits = Exhibit.all 
        render json: @exhibits
    end

    def show
        render json: @exhibit
    end

    def new
    end

    def create
        @exhibit = Exhibit.create(exhibit_params)
        render json: @exhibit
    end

    def edit
        render json: @exhibit
    end

    def update
        render json: @exhibit
    end

    def destroy
        @exhibit.destroy
    end

    private

    def exhibit_params
        params.require(:exhibit).permit(:name, :museum_id)
    end

    def set_current_exhibit
        @exhibit = Exhibit.find(params[:id])
    end

end
