class ReservationsController < ApplicationController
    def index 
        render json: Reservation.all
    end
    
    def create 
        newReservation = Reservation.create(newReservationParams)
        render json: newReservation
    end


    private
    def newReservationParams
        params.permit(:user_id, :reservation_timestamp, :number_of_players)
    end
end
