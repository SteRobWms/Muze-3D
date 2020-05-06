class Room < ApplicationRecord
    has_one_attached :background_image
    
    belongs_to :exhibit
    has_many :items
end
