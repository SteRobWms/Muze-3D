class FavoriteExhibit < ApplicationRecord
  belongs_to :user
  belongs_to :exhibit
end
