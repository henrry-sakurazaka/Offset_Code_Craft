# frozen_string_literal: true

# Contact model for handling contact form input and validation.
class Contact
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :name, :string
  attribute :email, :string
  attribute :message, :string

  validates :name, presence: true
  validates :email, presence: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :message, presence: true
end
