class ExhibitsController < ApplicationController

    before_action :set_current_exhibit, only: [:show, :edit, :update, :destroy, :add_rooms]

    def index
        @exhibits = Exhibit.all 
        render json: @exhibits
    end

    def show
        render json: @exhibit
    end

    def new
        setUser
    end

    def create
        setUser
        @exhibit = Exhibit.create(exhibit_params)
        render json: @exhibit
    end

    def edit
        render json: @exhibit
    end
    
    def update
        setUser
        byebug
        if exhibit_params[:description] != ""
            @exhibit.description = (exhibit_params[:description])
            @exhibit.save
        end
        render json: @exhibit
    end

    def add_rooms
        byebug
    end

    def destroy
        @exhibit.destroy
    end

    private

    def exhibit_params
        params.permit(:name, :museum_id, :description, :background_image, :rooms)
    end

    def set_current_exhibit
        @exhibit = Exhibit.find(params[:id])
    end

end
