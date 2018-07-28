class Api::BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def show
    @bike = Bike.find(params[:id])
    render json: @bike
  end

  def create
    @bike = Bike.create!(bike_params)
    render json: @bike
  end

  def update
    @bike = Bike.find(params[:id])
    @bike.update!(bike_params)
    render json: @bike
  end

  def destroy
    @bike = Bike.find(params[:id]).delete
    render status: :ok
  end

  private

  def bike_params
      params.require(:bike).permit(:make, :model, :year, :comments, :photo_url, :trade, :trade_details, :contact)
  end
end