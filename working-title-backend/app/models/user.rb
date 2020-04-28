class User < ApplicationRecord
    has_secure_password

    has_many :museums
    has_many :exhibits, through: :museums
    has_many :favorite_museums
    # has_many :museums, through: :favorite_museums
    has_many :favorite_exhibits
    has_many :exhibits, through: :favorite_exhibits

    validates :username, uniqueness: true
end
