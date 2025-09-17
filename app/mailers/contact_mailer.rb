# frozen_string_literal: true

# メールフォームの基本設定
class ContactMailer < ApplicationMailer
  default to: ENV.fetch('MY_MAIL_ADDRESS', nil), from: ENV.fetch('FROM_MAIL_ADDRESS', nil)

  def contact_email(name, email, message)
    @name = name
    @sender_email = email
    @message = message

    mail(
      subject: "【お問い合わせ】#{@name}様より"
    )
  end
end
