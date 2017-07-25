class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.string :airport, null: false,
      t.string :terminal, null: false,
      t.integer :num_of_guests, null: false,
      t.string :approx_boarding_time, null: false
    end
  end
end
