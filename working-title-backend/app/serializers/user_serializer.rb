class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :museums

  def museums
    self.object.museums.map do |museum|
        {   name: museum.name,
            country: museum.country,
            city: museum.city,
            favorited_by: museum.favorite_museums.map do |fav|
                fav.user.username
            end
            }
        end
    end
end
