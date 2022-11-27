class ReservationsController < ApplicationController
    def index 
        # render json: Reservation.all
        thisDayReservation = Reservation.where("reservation_timestamp LIKE ?", "#{query_params[:q]}%").all
        render json: thisDayReservation
    end

    def myReservations
        myReservations = Reservation.where(user_id: user_params[:u])
        render json: myReservations
    end

    def myReservation
        myReservation = Reservation.find(params[:id])
        if myReservation
            render json: myReservation
        else
            render json: { error: "reservation not found" }, status: 404
        end
    end
    
    def create 
        newReservation = Reservation.create(newReservationParams)
        render json: newReservation
    end

    def show
        thisDayReservation = Reservation.where("reservation_timestamp LIKE ?", "#{query_params[:q]}%").all
        render json: thisDayReservation
    end

    def destroy
        deleteReservation = Reservation.find(params[:id])
        if deleteReservation
            deleteReservation.destroy
        else
            render json: {error: "Reservation not found"}, status: 404
        end
    end

    private
    def newReservationParams
        params.permit(:user_id, :reservation_timestamp, :number_of_players)
    end

    def query_params
        params.permit(:q)
    end

    def user_params
        params.permit(:u)
    end
end
