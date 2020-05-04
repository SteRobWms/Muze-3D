class Exhibit < ApplicationRecord
  belongs_to :museum
  has_many :favorite_exhibits
  has_many :users, through: :favorite_exhibits
  has_many :rooms
  has_many :items, through: :rooms
end
