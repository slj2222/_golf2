class ReservationsController < ApplicationController
    def index 
        render json: Reservation.all
    end
    
    def create 
        newReservation = Reservation.create(newReservationParams)
        render json: newReservation
    end

    def show
        thisDayReservation = Reservation.where("reservation_timestamp LIKE ?", params[:q]).all
        render json: thisDayReservation
    end

    private
    def newReservationParams
        params.permit(:user_id, :reservation_timestamp, :number_of_players)
    end

    def query_params
        params.permit(:q)
    end
end
