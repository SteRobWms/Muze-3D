class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :museums, :favorite_museums, :exhibits, :favorite_exhibits

  def museums
    self.object.museums.map do |museum| {
        id: museum.id,
        name: museum.name,
        city: museum.city,
        state: museum.state,
        country: museum.country,
        description: museum.description,
        category: museum.category,
        background_image: museum.background_image,
        favorited_by: museum.favorite_museums.map do |fav|
            fav.user.username
            end,
        favorite_count: museum.favorite_museums.count,
        exhibits: museum.exhibits.map do |exhibit| {
            name: exhibit.name,
            description: exhibit.description,
            depth: exhibit.depth,
            width: exhibit.width,
            height: exhibit.height,
            background_image: exhibit.background_image,
            rooms: exhibit.rooms.map{|room| room.id},
            items: exhibit.items
        }
      end
    }
        end
    end
  def favorite_museums
    self.object.favorite_museums.map do |fav_museum|
        museum = Museum.find(fav_museum.museum_id)
        {
            owner: {
                username: User.find(museum.user_id).username,
                id: User.find(museum.user_id).id
            },
            name: museum.name,
            id: museum.id,
            city: museum.city,
            state: museum.state,
            country: museum.country,
            description: museum.description,
            category: museum.category,
            favorite_count: museum.favorite_museums.count,
            background_image: museum.background_image
            }
        end
    end

    def exhibits
        self.object.exhibits.map do |exhibit|
            {
                id: exhibit.id,
                name: exhibit.name,
                background_image: exhibit.background_image,
                description: exhibit.description,
                museum: {
                    name: Museum.find(exhibit.museum_id).name,
                    city: Museum.find(exhibit.museum_id).city,
                    country: Museum.find(exhibit.museum_id).country
                }
            }    
        end 
    end

    def favorite_exhibits
        self.object.favorite_exhibits.map do |fav_exhibit|
            exhibit = Exhibit.find(fav_exhibit.exhibit_id)
            museum = Museum.find(exhibit.museum_id)
            {
                owner: {
                    username: User.find(fav_exhibit.user_id).username,
                    id: fav_exhibit.user_id
                },
                name: exhibit.name,
                background_image: exhibit.background_image,
                museum: {
                    name: museum.name,
                    city: museum.city,
                    country: museum.country
                },
                description: exhibit.description,
                favorite_count: exhibit.favorite_exhibits.count
                }
            end
        end
end