class AddDestinationToBuses < ActiveRecord::Migration[5.0]
  def change
    add_column :buses, :destination, :string
  end
end
