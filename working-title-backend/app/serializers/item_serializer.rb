class ItemSerializer < ActiveModel::Serializer
    attributes :id, :item_code, :name, :description, :creator, :country_of_origin, :state_of_origin, :city_of_origin, :year_of_origin, :image, :depth, :width, :height, :model, :x_pos, :y_pos, :z_pos, :exhibit, :museum, :room

        def creator
            creator = User.find(Museum.find(Exhibit.find(Room.find(self.object.room_id).exhibit_id).museum_id).user_id)
            {
                id: creator.id,
                username: creator.username
            }
        end

        def exhibit
            exhibit = Exhibit.find(Room.find(self.object.room_id).exhibit_id)
            {
                id: exhibit.id,
                name: exhibit.name,
                description: exhibit.description,
                background_image: exhibit.background_image
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
                background_image: museum.background_image,
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
