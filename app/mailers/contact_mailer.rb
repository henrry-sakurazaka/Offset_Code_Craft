# frozen_string_literal: true

# メールフォームの基本設定
class ContactMailer < ApplicationMailer
  # Environment Variables から直接取得、nil をデフォルトにしない
  default to: ENV.fetch('MY_MAIL_ADDRESS'), from: ENV.fetch('FROM_MAIL_ADDRESS')

  def contact_email(name, email, message)
    @name = name
    @sender_email = email
    @message = message

    mail(
      subject: "【お問い合わせ】#{@name}様より"
      # body は mailer ビューで管理するか、テキストだけならここに書いてもOK
    )
  end
end
