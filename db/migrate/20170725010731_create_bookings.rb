class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.string :airport, null: false
      t.string :terminal, null: false
      t.integer :num_of_guests, null: false
      t.string :boarding_time, null: false
      t.integer :user_id, null: false
      t.integer :bus_id, null: false
    end
  end
end
