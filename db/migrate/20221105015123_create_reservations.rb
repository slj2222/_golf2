class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.string :reservation_timestamp
      t.integer :number_of_players

      t.timestamps
    end
  end
end
