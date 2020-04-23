class CreateFavoriteMuseums < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_museums do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :museum, null: false, foreign_key: true

      t.timestamps
    end
  end
end
