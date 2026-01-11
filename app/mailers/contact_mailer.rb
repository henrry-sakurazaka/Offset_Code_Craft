# frozen_string_literal: true

# メールフォームの基本設定
# app/mailers/contact_mailer.rb
class ContactMailer < ApplicationMailer
  def contact_email(name, email, message)
    {
      From: {
        Email: ENV.fetch('FROM_MAIL_ADDRESS', nil),
        Name: 'Offset_code_craft'
      },
      To: [{
        Email: ENV.fetch('TO_MAIL_ADDRESS', nil)
      }],
      Subject: "【お問い合わせ】#{name}様より",
      TextPart: "From: #{email}\n\n#{message}",
      HTMLPart: "<p>From: #{email}</p><p>#{message}</p>"
    }
  end
end
