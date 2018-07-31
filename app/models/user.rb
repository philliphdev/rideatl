class User < ApplicationRecord
    has_many :rides, dependent: :destroy
    has_many :bikes, dependent: :destroy

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, length: { maximum: 255 }
    validates :password, presence: true, length: { minimum: 6 }
end
