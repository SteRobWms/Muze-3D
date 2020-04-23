class Museum < ApplicationRecord
  belongs_to :user
  has_many :exhibits
  has_many :items, through: :exhibits
  has_many :favorite_museums
  has_many :users, through: :favorite_museums
end
