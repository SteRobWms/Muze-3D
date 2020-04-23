class Exhibit < ApplicationRecord
  belongs_to :museum
  has_many :favorite_exhibits
  has_many :users, through: :favorite_exhibits
  has_many :items
end
