# frozen_string_literal: true

# ContactsController: お問い合わせ用コントローラ
class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    redirect_to root_path, alert: I18n.t('contacts.alerts.invalid_input') and return unless valid_contact?(@contact)

    begin
      ContactMailer.contact_email(@contact.name, @contact.email, @contact.message).deliver_now
      redirect_to complete_contact_path, notice: I18n.t('contacts.notices.sent')
    rescue StandardError => e
      Rails.logger.error "メール送信エラー: #{e.message}"
      redirect_to root_path, alert: I18n.t('contacts.alerts.send_error')
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
