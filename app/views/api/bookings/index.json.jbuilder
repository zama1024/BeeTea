@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :start_date, :end_date, :id, :listing_id, :num_guests, :charity_org
    json.listing booking.listing
    json.booker booking.user
  end
end
