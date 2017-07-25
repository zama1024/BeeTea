json.extract! @booking, :airport, :terminal, :id, :bus_id, :num_of_guests, :boarding_time
json.bus @booking.bus
json.booker @booking.user
