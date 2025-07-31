class ContactMailer < ApplicationMailer
  default to: "bright.lights.21@me.com", from: "no-reply@offsetcodecraft.com"

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
