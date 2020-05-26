class MuseumsController < ApplicationController
    before_action :set_current_museum, only: [:show, :edit, :update, :destroy]

    def index
        @museums = Museum.all
        render json: @museums
    end

    def show
        # setUser
        render json: @museum
    end

    def new
        # git test
    end

    def create
        setUser
        params[:user_id] = @user.id
        @museum = Museum.create(museum_params)
        respond_to_museum()
    end

    def edit
        render json: @museum
    end

    def update
        render json: @museum
    end

    def destroy
        if @museum.exhibits.count > 0
            return render json: {error: "You must delete this museum's exhibits first!"}
        else
            @museum.destroy
        end
        render json: {message: "Museum Deleted"}
    end

    private

    def museum_params
        params.permit(:name, :user_id, :description, :country, :state, :city, :category, :background_image)
    end

    def respond_to_museum()
        if @museum.valid?()
            museum_serializer = NewMuseumSerializer.new(museum: @museum, user: @user)
            render json: museum_serializer.serialize_new_museum()
        else
            render json: {errors: museum.errors}, status: 400
        end
    end

    def set_current_museum
        @museum = Museum.find(params[:id])
    end

end
