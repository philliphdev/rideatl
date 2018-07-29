class Api::AllbikesController < ApplicationController
  def index
    @allbikes = Bike.all
    render json: @allbikes
  end
end
