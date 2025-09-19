# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  let(:name) { '山田太郎' }
  let(:email) { 'taro@example.com' }
  let(:message) { 'こんにちは' }
  let(:to_mail_address) { 'admin@example.com' }

  # Mailjet::Send のモックを作る
  let(:mailjet_spy) { class_double(Mailjet::Send).as_stubbed_const }

  before do
    allow(mailjet_spy).to receive(:create)
    # contact_email 呼び出し時にモック経由で呼ぶ
    described_class.contact_email(name, email, message, to_mail_address)
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
