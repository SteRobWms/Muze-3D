class ExhibitSerializer < ActiveModel::Serializer
  attributes :id, :creator, :name, :description, :background_image, :rooms, :items, :museum

    def background_image
        self.object.background_image.service_url
    end
    
    def rooms
        self.object.rooms.map do |room|
            {exhibit_id: room.exhibit_id,
            background_image: room.background_image.service_url}
        end
    end

    def museum
        @museum = Museum.find(self.object.museum_id)
        {name: @museum.name,
        category: @museum.category,
        background_image: @museum.background_image.service_url
        }
    end

    def creator
        {
        id: Museum.find(self.object.museum_id).user_id,
        username: User.find(Museum.find(self.object.museum_id).user_id).username
        }
    end

    def items
        self.object.items.map do |item|
            {
                id: item.id,
                name: item.name,
                description: item.description,
                creator: item.creator,
                year_of_origin: item.year_of_origin,
                item_code: item.item_code.service_url,
                image: item.image,
                room_id: item.room_id,
                img_prefix: self.object.img_prefix
            }
        end
    end
end