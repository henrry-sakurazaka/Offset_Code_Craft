# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  describe '#contact_email' do
    let(:name) { '山田太郎' }
    let(:email) { 'test@example.com' }
    let(:message) { 'これはテストメッセージです。' }
    let(:mail) { described_class.contact_email(name, email, message) }

    it '正しい宛先に送信されること' do
      expect(mail.to).to eq [ENV.fetch('MY_MAIL_ADDRESS', nil)]
    end

    it '正しい件名で送信されること' do
      expect(mail.subject).to eq 'OffSetCodeCraftへお問い合わせがありました'
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
end
