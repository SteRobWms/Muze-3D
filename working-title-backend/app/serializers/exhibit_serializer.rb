class ExhibitSerializer < ActiveModel::Serializer
  attributes :id, :creator, :name, :description, :background_image, :rooms, :museum

    def background_image
        if self.object.background_image.attached?
            if self.object.background_image.service_url
                self.object.background_image.service_url
            end
        else
            ""
        end
    end
    
    def rooms
        self.object.rooms.map do |room|
        {
            id: room.id,
            exhibit_id: room.exhibit_id,
            background_image: 
                if room.background_image.attached?
                    room.background_image.service_url
                else
                    ""
                end,
            items: 
                room.items.map do |item| 
                {
                    id: item.id,
                    room_id: item.room_id,
                    name: item.name,
                    description: item.description,
                    creator: item.creator,
                    image:
                        if item.image.attached?
                            item.image.service_url
                        else
                            ""
                        end,
                    country_of_origin: item.country_of_origin,
                    state_of_origin: item.state_of_origin,
                    city_of_origin: item.city_of_origin,
                    year_of_origin: item.year_of_origin,
                    item_code: item.item_code,
                    x_pos: item.x_pos,
                    y_pos: item.y_pos,
                    z_pos: item.z_pos,
                    height: item.height,
                    width: item.width,
                    depth: item.depth,
                    model: item.model
                }
                end
        }
        end
    end

    def museum
        @museum = Museum.find(self.object.museum_id)
        {
            name: @museum.name,
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

end