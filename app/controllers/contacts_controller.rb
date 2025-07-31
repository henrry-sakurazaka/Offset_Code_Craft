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
    end
  end

  def complete_contact
    render layout: "application"
  end
end


# データベースを想定したロジック

# class ContactsController < ApplicationController
#   def new
#     @contact = Contact.new
#   end

#   def create
#     name = params["your_name"]
#     email = params["your_email"]
#     message = params["your_message"]

#     Rails.logger.debug "name: #{name}, email: #{email}, message: #{message}"

#     if name.blank? || email.blank? || message.blank? || !email.match?(/\A[\w.+-]+@[a-z\d.-]+\.[a-z]+\z/i)
#       flash[:alert]= "すべての項目を正しく入力してください。"
#       render :new
#       return
#     end

#     @contact = Contact.new(name: name, email: email, message: message)

#     if @contact.save
#       Rails.logger.debug "Sending email to #{email}"
#       ContactMailer.contact_email(name, email, message).deliver_now
#       Rails.logger.debug "Email sent"
#       redirect_to complete_contact_path, notice: "送信されました。"
#     else
#       render :new, status: :unprocessable_entity
#     end
#   end

#   def complete_contact
#     # 完了画面を表示するだけのアクションでOK（何もしない）
#   end
# end
