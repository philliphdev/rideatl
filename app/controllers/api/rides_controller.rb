class Api::RidesController < ApplicationController
  def index
    @rides = Ride.all
    render json: @rides
  end

  def show
  end

  def create
  end

  def update
  end

  def delete
  end
end
