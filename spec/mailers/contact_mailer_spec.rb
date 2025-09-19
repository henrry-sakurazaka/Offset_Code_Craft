# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  let(:name) { '山田太郎' }
  let(:email) { 'taro@example.com' }
  let(:message) { 'こんにちは' }
  let(:to_mail_address) { 'admin@example.com' }

  # ここで Mailjet::Send を差し替える
  let(:mailjet_spy) { class_double(Mailjet::Send, create: true) }

  before do
    stub_const('Mailjet::Send', mailjet_spy)
    described_class.contact_email(name, email, message)
  end

  it '正しい宛先に送信されること' do
    expect(mailjet_spy).to have_received(:create).with(
      messages: array_including(
        hash_including(To: [{ Email: to_mail_address }])
      )
    )
  end

  it '本文に名前が含まれていること' do
    expect(mailjet_spy).to have_received(:create).with(
      messages: array_including(
        hash_including(TextPart: include(name))
      )
    )
  end

  it '本文にメールアドレスが含まれていること' do
    expect(mailjet_spy).to have_received(:create).with(
      messages: array_including(
        hash_including(TextPart: include(email))
      )
    )
  end

  it '本文にメッセージが含まれていること' do
    expect(mailjet_spy).to have_received(:create).with(
      messages: array_including(
        hash_including(TextPart: include(message))
      )
    )
  end
end
