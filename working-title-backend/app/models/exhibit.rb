class Exhibit < ApplicationRecord
    # include Rails.application.routes.url_helpers
    has_one_attached :background_image

  belongs_to :museum
  has_many :favorite_exhibits
  has_many :users, through: :favorite_exhibits
  has_many :rooms
  has_many :items, through: :rooms
end
