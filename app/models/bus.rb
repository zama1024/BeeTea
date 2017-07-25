class Bus < ActiveRecord::Base
  validates :airport, :terminal, :bus_capacity, :start_time, presence: true
end
