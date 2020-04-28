class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.belongs_to :exhibit, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.string :creator
      t.string :country_of_origin
      t.string :state_of_origin
      t.string :city_of_origin
      t.integer :year_of_origin
      t.string :image
      t.integer :depth
      t.integer :width
      t.integer :height
      t.string :model
      t.integer :x_pos
      t.integer :y_pos
      t.integer :z_pos
      t.string :item_code

      t.timestamps
    end
  end
end
