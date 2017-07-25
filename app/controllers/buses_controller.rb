class BusesController < ApplicationController
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
