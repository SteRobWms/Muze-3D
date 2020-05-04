class ExhibitSerializer < ActiveModel::Serializer
  attributes :id, :creator, :name, :description, :background_image, :favorite_exhibits, :rooms, :items, :museum

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

end
