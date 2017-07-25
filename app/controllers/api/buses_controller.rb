class Api::BusesController < ApplicationController

  def index
    airport = params[:airport]
    destination = params[:destination]
    num_guests = params[:number_of_guests].to_i
    boarding_time = params[:boarding_time].split(":")
    start_time_hour = boarding_time[0] + '%'
    start_time_minute = '%' + boarding_time[1]
    @bus = Bus.where("airport = ? and bus_capacity > ? and start_time LIKE ? and start_time LIKE ?", airport, num_guests,start_time_hour, start_time_minute).first
    render "api/buses/show"
  end

  def create
    @bus = Bus.new(bus_params)
    if @bus.save
       render "api/buses/show"
    else
      render json: @bus.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:airport, :terminal, :bus_capacity, :start_time)
  end
end
