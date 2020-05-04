class Room < ApplicationRecord
  belongs_to :exhibit
  has_many :items
end
