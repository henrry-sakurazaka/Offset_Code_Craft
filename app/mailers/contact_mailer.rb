class ContactMailer < ApplicationMailer
  default to: ENV["MY_MAIL_ADDRESS"], from: ENV["FROM_MAIL_ADDRESS"]

  def contact_email(name, email, message)
    @name = name
    @sender_email = email
    @message = message

    mail(
      subject: "OffSetCodeCraftへお問い合わせがありました",
      body: "名前: #{@name}\nメール: #{@sender_email}\nお問い合わせ内容:\n#{@message}"
    )
  end
end
