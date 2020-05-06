class ItemSerializer < ActiveModel::Serializer
    attributes :id, :item_code, :name, :description, :creator, :country_of_origin, :state_of_origin, :city_of_origin, :year_of_origin, :image, :depth, :width, :height, :model, :x_pos, :y_pos, :z_pos, :creating_user, :exhibit, :museum, :room

        def creating_user
            creating_user = User.find(Museum.find(Exhibit.find(Room.find(self.object.room_id).exhibit_id).museum_id).user_id)
            {
                id: creating_user.id,
                username: creating_user.username
            }
        end

        def exhibit
            exhibit = Exhibit.find(Room.find(self.object.room_id).exhibit_id)
            {
                id: exhibit.id,
                name: exhibit.name,
                description: exhibit.description,
                background_image: exhibit.background_image.attached? ? exhibit.background_image.service_url ? exhibit.background_image.service_url : "Please update image" : "Please update image"
            }
        end
        
        def museum
            museum = Museum.find(Exhibit.find(Room.find(self.object.room_id).exhibit_id).museum_id)
            {
                id: museum.id,
                name: museum.name,
                description: museum.description,
                country: museum.country,
                state: museum.state,
                city: museum.city,
                background_image: museum.background_image.attached? ? museum.background_image.service_url ? museum.background_image.service_url : "Please update image" : "Please update image",
                category: museum.category
            }
        end

        def room
            room = Room.find(self.object.room_id)
            {
                id: room.id,
                exhibit_id: room.exhibit_id
            }
        end
end
