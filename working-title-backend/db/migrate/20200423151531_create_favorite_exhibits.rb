class CreateFavoriteExhibits < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_exhibits do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :exhibit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
