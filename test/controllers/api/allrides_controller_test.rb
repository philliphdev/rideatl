require 'test_helper'

class Api::AllridesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_allrides_index_url
    assert_response :success
  end

  test "should get show" do
    get api_allrides_show_url
    assert_response :success
  end

end
