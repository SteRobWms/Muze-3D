class ItemsController < ApplicationController

    before_action :set_current_item, only: [:show, :edit, :update, :destroy]

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
        byebug
        set_current_exhibit
        set_current_room
        byebug
        @item = Item.create(room_id: item_params[:room])
        byebug
        render json: @exhibit
    end

    def edit
        render json: @item
    end

    def update
        render json: @item
    end

    def destroy
        @item.destroy
    end

    private

    def item_params
        params.permit(:name, :exhibit, :exhibit_id, :room, :room_id, :description)
    end

    def set_current_item
        @item = Item.find(params[:item])
    end

    def set_current_exhibit
        @exhibit = Exhibit.find(params[:exhibit])
    end

    def set_current_room
        @room = Room.find(params[:room])
    end
end
