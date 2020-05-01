# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_01_164124) do

  create_table "exhibits", force: :cascade do |t|
    t.integer "museum_id", null: false
    t.string "name"
    t.string "description"
    t.integer "depth"
    t.integer "width"
    t.integer "height"
    t.string "background_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["museum_id"], name: "index_exhibits_on_museum_id"
  end

  create_table "favorite_exhibits", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "exhibit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["exhibit_id"], name: "index_favorite_exhibits_on_exhibit_id"
    t.index ["user_id"], name: "index_favorite_exhibits_on_user_id"
  end

  create_table "favorite_museums", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "museum_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["museum_id"], name: "index_favorite_museums_on_museum_id"
    t.index ["user_id"], name: "index_favorite_museums_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.integer "room_id", null: false
    t.string "name"
    t.string "description"
    t.string "creator"
    t.string "country_of_origin"
    t.string "state_of_origin"
    t.string "city_of_origin"
    t.integer "year_of_origin"
    t.string "image"
    t.integer "depth"
    t.integer "width"
    t.integer "height"
    t.string "model"
    t.integer "x_pos"
    t.integer "y_pos"
    t.integer "z_pos"
    t.string "item_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["room_id"], name: "index_items_on_room_id"
  end

  create_table "museums", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name"
    t.string "description"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_museums_on_user_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.integer "exhibit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["exhibit_id"], name: "index_rooms_on_exhibit_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "exhibits", "museums"
  add_foreign_key "favorite_exhibits", "exhibits"
  add_foreign_key "favorite_exhibits", "users"
  add_foreign_key "favorite_museums", "museums"
  add_foreign_key "favorite_museums", "users"
  add_foreign_key "items", "rooms"
  add_foreign_key "museums", "users"
  add_foreign_key "rooms", "exhibits"
end
