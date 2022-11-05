class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :userId
      t.string :reservationTimestamp
      t.string :numOfPlayers

      t.timestamps
    end
  end
end
