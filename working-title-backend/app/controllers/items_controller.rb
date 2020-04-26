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
        @item = Item.create(item_params)
        render json: @item
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
        params.require(:item).permit(:name, :exhibit_id)
    end

    def set_current_item
        @item = Item.find(params[:id])
    end

end
