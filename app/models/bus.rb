class Bus < ActiveRecord::Base
  validates :airport, :terminal, :bus_capacity, :start_time, presence: true

  has_many :bookings,
  class_name: "Booking",
  foreign_key: :bus_id,
  primary_key: :id

end
