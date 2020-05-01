class MuseumSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :country, :state, :city, :category, :user
end