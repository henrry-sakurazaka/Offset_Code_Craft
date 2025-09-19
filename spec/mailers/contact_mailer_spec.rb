# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  let(:name) { '山田太郎' }
  let(:email) { 'taro@example.com' }
  let(:message) { 'こんにちは' }

  before do
    # 環境変数を設定
    ENV['FROM_MAIL_ADDRESS'] = 'noreply@offsetcodecraft.site'
    ENV['TO_MAIL_ADDRESS'] = 'admin@example.com'

    # Mailjet::Send.create をモック
    allow(Mailjet::Send).to receive(:create)
  end

  it '正しい宛先に送信されること' do
    described_class.contact_email(name, email, message)
    expect(Mailjet::Send).to have_received(:create).with(
      messages: array_including(
        hash_including(
          To: [{ Email: ENV.fetch('TO_MAIL_ADDRESS', nil) }]
        )
      )
    )
  end

  it '本文に名前が含まれていること' do
    described_class.contact_email(name, email, message)
    expect(Mailjet::Send).to have_received(:create).with(
      messages: array_including(
        hash_including(
          TextPart: include(name)
        )
      )
    )
  end

  it '本文にメールアドレスが含まれていること' do
    described_class.contact_email(name, email, message)
    expect(Mailjet::Send).to have_received(:create).with(
      messages: array_including(
        hash_including(
          TextPart: include(email)
        )
      )
    )
  end

  it '本文にメッセージが含まれていること' do
    described_class.contact_email(name, email, message)
    expect(Mailjet::Send).to have_received(:create).with(
      messages: array_including(
        hash_including(
          TextPart: include(message)
        )
      )
    )
  end
end
