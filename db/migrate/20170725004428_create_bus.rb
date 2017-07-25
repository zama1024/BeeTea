class CreateBus < ActiveRecord::Migration[5.0]
  def change
    create_table :buses do |t|
      t.string :airport, null: false
      t.string :terminal, null: false
      t.integer :bus_capacity, null: false
      t.string :start_time, null: false
    end
  end
end
