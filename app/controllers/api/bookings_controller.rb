class Api::BookingsController < ApplicationController
  def index
    @bookings = current_user.bookings
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    if @booking.save
      @bookings = current_user.bookings
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    Booking.find(params[:id]).destroy
    @bookings = Booking.all
    render :index
  end

  private

  def booking_params
    params.require(:bookingInfo).permit(:airport, :terminal, :num_of_guests, :boarding_time, :bus_id)
  end
end
