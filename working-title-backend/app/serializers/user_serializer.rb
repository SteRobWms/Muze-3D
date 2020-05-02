class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :museums, :favorite_museums, :favorite_exhibits

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
#   def favorite_exhibits
#     self.object.favorite_exhibits.map do |fav_exhibit|
#         exhibit = Exhibit.find(fav_exhibit.exhibit_id)
#         {
#             owner: {
#                 username: User.find(exhibit.user_id).username,
#                 id: User.find(exhibit.user_id).id
#             },
#             name: exhibit.name,
#             city: exhibit.city,
#             state: exhibit.state,
#             country: exhibit.country,
#             description: exhibit.description,
#             category: exhibit.category,
#             favorite_count: exhibit.favorite_exhibits.count
#             }
#         end
#     end
end
# t.integer "museum_id", null: false
# t.string "name"
# t.string "description"
# t.integer "depth"
# t.integer "width"
# t.integer "height"
# t.string "background_image"