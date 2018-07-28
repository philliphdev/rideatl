class User < ApplicationRecord
    has_many :rides, dependent: :destroy
    has_many :bikes, dependent: :destroy
end
