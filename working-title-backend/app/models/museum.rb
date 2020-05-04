class Museum < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_one_attached :background_image
  
    belongs_to :user
    has_many :exhibits
    has_many :items, through: :exhibits
    has_many :favorite_museums
    has_many :users, through: :favorite_museums

    def get_image_url
        url_for(self.background_image)
    end

end
