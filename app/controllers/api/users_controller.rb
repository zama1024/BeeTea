class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
       render "api/users/show"
    else
      render json: { base: ["invalid credentials"] }, status: 422
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :password, :card_expiry_date, :card_number)
  end
end
