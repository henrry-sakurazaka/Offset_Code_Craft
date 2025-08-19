# frozen_string_literal: true

# ContactsController: お問い合わせ用コントローラ
class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    unless valid_contact?(@contact)
      flash.now[:alert] = I18n.t('contacts.alerts.invalid_input') # 例: 'すべての項目を正しく入力してください。'
      render :new, status: :unprocessable_entity and return
    end

    if send_contact_email(@contact)
      redirect_to complete_contact_path, notice: I18n.t('contacts.notices.sent') # 例: '送信されました。'
    else
      flash.now[:alert] = I18n.t('contacts.alerts.send_error') # 例: '送信中にエラーが発生しました。'
      render :new, status: :unprocessable_entity
    end
  end

  def complete_contact
    render layout: 'application'
  end

  private

  def contact_params
    params.permit(:name, :email, :message)
  end

  def valid_contact?(contact)
    contact.name.present? &&
      contact.email.present? &&
      contact.message.present? &&
      contact.email.match?(/\A[\w.+-]+@[a-z\d.-]+\.[a-z]+\z/i)
  end

  def send_contact_email(contact)
    ContactMailer.contact_email(contact.name, contact.email, contact.message).deliver_now
    true
  rescue StandardError => e
    Rails.logger.error "メール送信エラー: #{e.message}"
    false
  end
end
