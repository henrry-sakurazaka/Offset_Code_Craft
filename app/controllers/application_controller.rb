# frozen_string_literal: true

# ApplicationController: 全コントローラーの基底クラスです。
class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
end
