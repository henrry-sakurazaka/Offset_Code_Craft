# frozen_string_literal: true

# ContactsController: お問い合わせ用コントローラ
class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    log_contact(@contact)

    handle_invalid_contact and return if invalid_contact?(@contact)

    deliver_contact_email(@contact)
  end

  private

  def log_contact(contact)
    Rails.logger.info "Contact params: #{contact.attributes.inspect}"
    Rails.logger.info "valid_contact? = #{valid_contact?(contact)}"
  end

  def invalid_contact?(contact)
    !valid_contact?(contact)
  end

  def handle_invalid_contact
    Rails.logger.warn '入力不正のため root_path にリダイレクト'
    redirect_to root_path, alert: I18n.t('contacts.alerts.invalid_input')
  end

  def deliver_contact_email(contact)
    # ContactMailer はメールの内容ハッシュだけ返す
    mail_data = ContactMailer.new.contact_email(contact.name, contact.email, contact.message)

    # Mailjet に送信
    Mailjet::Send.create(messages: [mail_data])

    redirect_to complete_contact_path, notice: I18n.t('contacts.notices.sent')
  rescue StandardError => e
    Rails.logger.error "メール送信エラー: #{e.message}"
    redirect_to root_path, alert: I18n.t('contacts.alerts.send_error')
  end

  def complete_contact
    render layout: 'application'
  end

  def contact_params
    params.permit(:name, :email, :message)
  end

  def valid_contact?(contact)
    contact.name.present? &&
      contact.email.present? &&
      contact.message.present? &&
      contact.email.match?(/\A[\w.+-]+@[a-z\d.-]+\.[a-z]+\z/i)
  end
end
