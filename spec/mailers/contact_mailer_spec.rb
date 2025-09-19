# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  let(:mail) { described_class.contact_email('山田太郎', 'taro@example.com', 'こんにちは') }

  it '正しい宛先に送信されること' do
    expect(mail.to).to eq([ENV.fetch('TO_MAIL_ADDRESS', nil)])
  end

  it '本文に名前が含まれていること' do
    expect(mail.body.encoded).to include('山田太郎')
  end

  it '本文にメールアドレスが含まれていること' do
    expect(mail.body.encoded).to include('taro@example.com')
  end

  it '本文にメッセージが含まれていること' do
    expect(mail.body.encoded).to include('こんにちは')
  end
end
