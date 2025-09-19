# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  let(:name) { '山田太郎' }
  let(:mail) { described_class.contact_email(name, email, message) }
  let(:email) { 'taro@example.com' }
  let(:message) { 'こんにちは' }

  before do
    # Mailjet API呼び出しをモック
    allow(Mailjet::Send).to receive(:create).and_return(true)
  end


  it '正しい宛先に送信されること' do
    expect(mail.to).to eq([ENV.fetch('TO_MAIL_ADDRESS', nil)])
  end

  it '本文に名前が含まれていること' do
    expect(mail.body.encoded).to include(name)
  end

  it '本文にメールアドレスが含まれていること' do
    expect(mail.body.encoded).to include(email)
  end

  it '本文にメッセージが含まれていること' do
    expect(mail.body.encoded).to include(message)
  end
end
