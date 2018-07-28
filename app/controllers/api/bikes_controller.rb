class Api::BikesController < ApplicationController
  def index
    @bikes = User.find(params[:user_id]).bikes
    render json: @bikes
  end

  def show
    @bike = User.find(params[:user_id]).bikes.find(params[:id])
    render json: @bike
  end

  def create
    @user = User.find(params[:user_id])
    @bike = @user.bike.create!(bike_params)
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