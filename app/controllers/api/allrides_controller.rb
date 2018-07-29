class Api::AllridesController < ApplicationController
  def index
    @allrides = Ride.all
    render json: @allrides
  end
end
