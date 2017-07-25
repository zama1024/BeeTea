class Booking < ActiveRecord::Base
  validates :user, :bus, :airport, :terminal, :num_of_guests, :boarding_time, presence: true

  belongs_to :user
  belongs_to :bus

end
