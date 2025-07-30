class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    name = params["your_name"]
    email = params["your_email"]
    message = params["your_message"]

    if name.blank? || email.blank? || message.blank? || !email.match?(/\A[\w.+-]+@[a-z\d.-]+\.[a-z]+\z/i)
      flash[:alert]= "すべての項目を正しく入力してください。"
      render :new
      return
    end

    @contact = Contact.new(name: name, email: email, message)

    ContactMailer.contact_email(name, email, message).deliver_now

    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to complete_contact_path, status: :see_other
    else
      render :new, status: :unprocessable_entity
    end
  end

   def complete_contact

    name = params["your-name"]
    email = params["your-email"]
    message = params["your-message"]

    redirect_to complete_path, notice: "送信されました。"
  end
end
