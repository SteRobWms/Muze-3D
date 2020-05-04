class CreateMuseums < ActiveRecord::Migration[6.0]
  def change
    create_table :museums do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.string :country
      t.string :state
      t.string :city
      t.string :category
      t.string :background_image

      t.timestamps
    end
  end
end
