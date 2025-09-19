# frozen_string_literal: true

# メールフォームの基本設定
class ContactMailer < ApplicationMailer
  def contact_email(name, email, message)
    Mailjet::Send.create(messages: [{
                           From: {
                             Email: ENV.fetch('FROM_MAIL_ADDRESS', nil),
                             Name: 'Offset_code_craft'
                           },
                           To: [{
                             Email: ENV.fetch('TO_MAIL_ADDRESS', nil) # 管理者のアドレスとか
                           }],
                           Subject: "【お問い合わせ】#{name}様より",
                           TextPart: "From: #{email}\n\n#{message}",
                           HTMLPart: "<p>From: #{email}</p><p>#{message}</p>"
                         }])
  end
end
