# frozen_string_literal: true

# SendGridで登録したメールアドレスを指定
class ApplicationMailer < ActionMailer::Base
  default from: 'bright.lights.21@me.com'
  layout 'mailer'
end
