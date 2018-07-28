class Api::RidesController < ApplicationController
  def index
    @rides = User.find(params[:user_id]).rides
    render json: @rides
  end

  def show
    @ride = User.find(params[:user_id]).rides.find(params[:id])
    render json: @ride
  end

  def create
    @user = User.find(params[:user_id])
    @ride = @user.rides.create!(ride_params)
    render json: @ride
  end

  def update
    @ride = Ride.find(params[:id])
    @ride.update!(ride_params)
    render json: @ride
  end

  def destroy
    @ride = Ride.find(params[:id]).delete
    render status: :ok
  end

  private

  def ride_params
      params.require(:ride).permit(:title, :ride_date, :description, :start_place, :end_place, :contact)
  end

end
