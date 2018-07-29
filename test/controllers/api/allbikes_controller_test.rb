require 'test_helper'

class Api::AllbikesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_allbikes_index_url
    assert_response :success
  end

end
