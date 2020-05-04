class NewMuseumSerializer < ActiveModel::Serializer
    
    def initialize(museum: nil, user:)
        @museum = museum
        @user = user
    end

    def serialize_new_museum()
        # user_details = serialize_user_details()
        serialized_new_museum = serialize_museum(@museum)
        serialized_new_museum.to_json()
    end
  
    private def serialize_museum(museum)
        {
            museum: {
                id: museum.id,
                image_url: museum.get_image_url(),
                description: museum.description,
                name: museum.name,
                category: museum.category,
                country: museum.country,
                state: museum.state,
                city: museum.city,
                user: {
                    id: museum.user_id,
                    username: User.find(museum.user_id).username
                },
                exhibits:
                    museum.exhibits.map do |exhibit|
                        {   id: exhibit.id,
                            name: exhibit.name,
                            description: exhibit.description,
                            items: exhibit.items}
                    end
                }
        }
    end

    # private def serialize_user_details

    # end


end
