class Api::RidesController < ApplicationController
  def index
    @rides = Ride.all
    render json: @rides
  end

  def show
    @ride = Ride.find(params[:id])
    render json: @ride
  end

  def create
    @ride = Ride.create!(ride_params)
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
