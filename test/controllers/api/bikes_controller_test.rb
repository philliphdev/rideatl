require 'test_helper'

class Api::BikesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_bikes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_bikes_show_url
    assert_response :success
  end

  test "should get create" do
    get api_bikes_create_url
    assert_response :success
  end

  test "should get update" do
    get api_bikes_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_bikes_delete_url
    assert_response :success
  end

end
