class Reservation < ApplicationRecord
    belongs_to :user

    validates :reservation_timestamp, presence: true
end