class MuseumSerializer < ActiveModel::Serializer
    
  attributes :id, :name, :city, :state, :country, :description, :category, :creator, :exhibits, :background_image

    # def initialize(museum: nil, user: nil)
    #     @museum = museum
    #     @user = user
    # end

    # def serialize_museum()
    #     serialized_museum = serialize_this_museum(@museum)
    #     serialized_museum.to_json()
    # end

    def background_image
        self.object.background_image.service_url ? self.object.background_image.service_url : "Please update image"
    end
    
    def creator
        {id: self.object.user_id,
        username: User.find(self.object.user_id).username}
    end

    # def favorite_museums
    #     {
    #         count: self.object.favorite_museums.count,
    #         lovers: self.object.favorite_museums.map do |fav|
    #             {
    #                 username: User.find(fav.user_id).username,
    #                 id: fav.user_id
    #         }
    #         end
    #     }
    # end
    
    # def exhibit_count
    #     self.object.exhibits.count
    # end

    def exhibits
        self.object.exhibits.map do |exhibit|
            {
                name: exhibit.name,
                id: exhibit.id,
                description: exhibit.description,
                background_image: exhibit.background_image.service_url ? exhibit.background_image.service_url : "update image"
            }
        end
    end
end
