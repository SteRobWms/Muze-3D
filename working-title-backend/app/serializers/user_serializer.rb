class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :museums, :exhibits

  def museums
    self.object.museums.map do |museum| {
        id: museum.id,
        name: museum.name,
        city: museum.city,
        state: museum.state,
        country: museum.country,
        description: museum.description,
        category: museum.category,
        background_image: museum.background_image.attached? ? museum.background_image.service_url ? museum.background_image.service_url : "Please update image" : "Please update image"
        }
        end
    end

    def exhibits
        self.object.exhibits.map do |exhibit|
            {
                id: exhibit.id,
                name: exhibit.name,
                background_image: exhibit.background_image.attached? ? exhibit.background_image.service_url ? exhibit.background_image.service_url : "Please update image" : "Please update image",
                description: exhibit.description,
                museum: {
                    name: Museum.find(exhibit.museum_id).name,
                    city: Museum.find(exhibit.museum_id).city,
                    country: Museum.find(exhibit.museum_id).country
                }
            }    
        end 
    end
end