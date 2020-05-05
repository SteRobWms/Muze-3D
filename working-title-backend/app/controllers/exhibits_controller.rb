class ExhibitsController < ApplicationController

    before_action :set_current_exhibit, only: [:show, :edit, :update, :destroy, :add_room, :delete_room, :update_room]

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
        # byebug
        if exhibit_params[:description] != ""
            @exhibit.description = (exhibit_params[:description])
            @exhibit.save
        end
        render json: @exhibit
    end
    
    def destroy
        @exhibit.destroy
    end
    
    def add_room
        @room = Room.create(exhibit_id: exhibit_params[:id])
        render json: @exhibit
    end

    def delete_room
        @room = Room.find(params[:room])
        @room.destroy
        render json: @exhibit
    end

    def update_room
        @room = Room.find(params[:room])
        @room.background_image = exhibit_params[:background_image]
        @room.save
        render json: @exhibit
    end
    




    private

    def exhibit_params
        params.permit(:id, :name, :museum_id, :description, :background_image, :rooms, :room)
    end

    def set_current_exhibit
        @exhibit = Exhibit.find(params[:id])
    end

end
