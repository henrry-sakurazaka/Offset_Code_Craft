# frozen_string_literal: true

# バリデーション設定
class Contact < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :message, presence: true
end
