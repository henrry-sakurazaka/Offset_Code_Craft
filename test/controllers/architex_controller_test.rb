# frozen_string_literal: true

require 'test_helper'

class ArchitexControllerTest < ActionDispatch::IntegrationTest
  test 'should get home' do
    get architex_home_url
    assert_response :success
  end
end
