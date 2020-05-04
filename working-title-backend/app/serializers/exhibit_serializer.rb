class ExhibitSerializer < ActiveModel::Serializer
  attributes :id, :creator, :name, :description, :background_image, :favorite_exhibits, :img_prefix, :rooms, :items, :museum

    def creator
        {
        id: Museum.find(self.object.museum_id).user_id,
        username: User.find(Museum.find(self.object.museum_id).user_id).username
        }
    end

    def favorite_exhibits
        {
            lovers: self.object.favorite_exhibits.pluck(:user_id)
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
                item_code: item.item_code,
                image: item.image,
                room_id: item.room_id,
                img_prefix: self.object.img_prefix
            }
        end
    end
end