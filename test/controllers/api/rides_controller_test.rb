require 'test_helper'

class Api::RidesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_rides_index_url
    assert_response :success
  end

  test "should get show" do
    get api_rides_show_url
    assert_response :success
  end

  test "should get create" do
    get api_rides_create_url
    assert_response :success
  end

  test "should get update" do
    get api_rides_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_rides_delete_url
    assert_response :success
  end

end
