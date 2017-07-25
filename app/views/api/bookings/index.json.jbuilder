@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :airport, :terminal, :id, :bus_id, :num_of_guests, :boarding_time, :user_id, :bus_id
    json.bus booking.bus
    json.booker booking.user
  end
end
