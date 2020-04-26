class CreateExhibits < ActiveRecord::Migration[6.0]
  def change
    create_table :exhibits do |t|
      t.belongs_to :museum, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.integer :depth
      t.integer :width
      t.integer :height
      t.string :background_image

      t.timestamps
    end
  end
end
