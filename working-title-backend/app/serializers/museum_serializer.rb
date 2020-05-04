class MuseumSerializer < ActiveModel::Serializer
  attributes :id, :name, :background_image, :city, :state, :country, :description, :category, :creator, :exhibit_count, :exhibits, :favorite_museums

    def creator 
        {
            id: self.object.user_id,
            username: User.find(self.object.user_id).username
        }
    end 

    def favorite_museums
        {
            count: self.object.favorite_museums.count,
            lovers: self.object.favorite_museums.map do |fav|
                {
                    username: User.find(fav.user_id).username,
                    id: fav.user_id
            }
            end
        }
    end
    
    def exhibit_count
        self.object.exhibits.count
    end

    def exhibits
        self.object.exhibits.map do |exhibit|
            {
                name: exhibit.name,
                id: exhibit.id,
                description: exhibit.description,
                background_image: exhibit.background_image,
                lovers: exhibit.favorite_exhibits.map{|fav| User.find(fav.user_id).username},
                lover_count: exhibit.favorite_exhibits.count
            } 
        end
    end
end
