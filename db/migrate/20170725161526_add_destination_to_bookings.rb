class AddDestinationToBookings < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :destination, :string
  end
end
