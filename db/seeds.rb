# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# seeds for users
u1 = User.create(username: 'test1', email: 'test1@gmail.com', password: '123', private: true)
u2 = User.create(username: 'test2', email: 'test2@gmail.com', password: '123', private: false)
u3 = User.create(username: 'test3', email: 'test3@gmail.com', password: '123', private: true)
u4 = User.create(username: 'test4', email: 'test4@gmail.com', password: '123', private: false)

# seeds for reservations
r1 = Reservation.create(user_id: u1.id, reservation_timestamp: 'Sun Nov 06 2022 08:00:00 GMT-0600 (Central Standard Time)', number_of_players: 1)

puts "done seeding"
