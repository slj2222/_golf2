# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# seeds for users
u1 = User.create(username: 'test1', email: 'test1@gmail.com', password: '123')

# seeds for reservations
# r1 = Reservation.create(userId: u1.id, reservationTimestamp: '')
