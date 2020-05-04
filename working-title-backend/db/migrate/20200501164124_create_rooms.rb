class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
        t.string :background_image
        t.string :img_prefix
        t.belongs_to :exhibit, null: false, foreign_key: true

        t.timestamps
    end
  end
end
