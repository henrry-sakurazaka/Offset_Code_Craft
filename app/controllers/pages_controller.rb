class PagesController < ApplicationController
  def home; end
  def about; end
  def contact; end
  def complete; end

  def select_layout
    case action_name
    when "home"
      "home_layout"
    when "about"
      "about_layout"
    when "contact"
      "contact_layout"
    when "complete"
      "complete_layout"
    else
      "application"
    end
  end
end

# def home
#   end

#   def about
#   end

#   def contact
#   end

#   def complete
#   end
# end
