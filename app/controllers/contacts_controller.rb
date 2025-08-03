class ContactsController < ApplicationController
    def new
      # フォーム表示用。何も準備しなくてOK
    end

    def create
      name = params[:name]
      email = params[:email]
      message = params[:message]

      Rails.logger.debug "name: #{name}, email: #{email}, message: #{message}"

      if name.blank? || email.blank? || message.blank? || !email.match?(/\A[\w.+-]+@[a-z\d.-]+\.[a-z]+\z/i)
        flash[:alert] = "すべての項目を正しく入力してください。"
        redirect_to complete_contact_path
        return
      end

      # メール送信
      begin
        Rails.logger.debug "Sending email to #{email}"
        ContactMailer.contact_email(name, email, message).deliver_now
        Rails.logger.debug "Email sent"
        redirect_to complete_contact_path, notice: "送信されました。"
      rescue => e
        Rails.logger.error "メール送信エラー: #{e.message}"
        flash[:alert] = "送信中にエラーが発生しました。"
        redirect_to contact_path

      @contact = Contact.new(name: name, email: email, message: message)

      ContactMailer.contact_email(name, email, message).deliver_now

      @contact = Contact.new(contact_params)
      if @contact.save
        redirect_to complete_contact_path, status: :see_other
      else
        render :new, status: :unprocessable_entity
      end
    end

    def complete_contact
      render layout: "application"
    end
  end
end

