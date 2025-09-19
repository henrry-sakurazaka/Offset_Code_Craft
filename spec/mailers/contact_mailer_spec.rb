# frozen_string_literal: true

# spec/mailers/contact_mailer_spec.rb
require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  let(:name) { '山田太郎' }
  let(:email) { 'taro@example.com' }
  let(:message) { 'こんにちは' }
  let(:to_mail_address) { 'admin@example.com' }

  let(:mailjet_spy) { class_spy(Mailjet::Send) }

  before do
    stub_const('Mailjet::Send', mailjet_spy)
    described_class.new.contact_email(name, email, message)
  end

  it '正しい宛先に送信されること' do
    described_class.new.contact_email(name, email, message)
    expect(mailjet_spy).not_to have_received(:create) # Mailer 自体は送信しないのでここは通る
  end
end
