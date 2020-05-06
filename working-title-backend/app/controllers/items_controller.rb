class ItemsController < ApplicationController

    before_action :set_current_item, only: [:show, :edit, :update, :update_image, :destroy]

    def index
        @items = Item.all 
        render json: @items
    end

    def show
        render json: @item
    end

    def new
    end

    def create
        set_current_exhibit
        set_current_room
        # byebug
        @item = Item.create(room_id: item_params[:room_id])
        # byebug
        render json: @exhibit
    end

    def edit
        render json: @item
    end
    # PATCH EXAMPLE FOR EXHIBITS
    # def update
    #     setUser
    #     if exhibit_params[:description] != ""
    #         @exhibit.description = (exhibit_params[:description])
    #         @exhibit.save
    #     end
    #     render json: @exhibit
    # end
    def update_image
        set_current_exhibit
        set_current_room
        # byebug
        @item.image = item_params[:image]
        # byebug
        @item.save
        render json: @exhibit
    end
    
    def update
        set_current_exhibit
        set_current_room
        @item.update(item_params)
        render json: @exhibit
    end

    def destroy
        set_current_exhibit
        set_current_room
        @item.destroy
        render json: @exhibit
    end

    private

    def item_params
        params.permit(:name, :room_id, :description, :image, :creator, :year_of_origin, :item_code, :country_of_origin, :state_of_origin, :city_of_origin, :width, :depth, :height, :x_pos, :y_pos, :z_pos, :exhibit_id)
    end

    def set_current_item
        @item = Item.find(params[:item_id])
    end

    def set_current_exhibit
        @exhibit = Exhibit.find(params[:exhibit_id])
    end

    def set_current_room
        @room = Room.find(params[:room_id])
    end
end
