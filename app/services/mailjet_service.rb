# frozen_string_literal: true

require 'net/http'
require 'json'
require 'uri'

# MailjetService: Mailjet API 経由でメール送信を行うサービスクラス
class MailjetService
  def self.send_email(to:, subject:, text:)
    uri = URI('https://api.mailjet.com/v3.1/send')
    req = Net::HTTP::Post.new(uri)
    req.basic_auth(ENV.fetch('MJ_APIKEY_PUBLIC'), ENV.fetch('MJ_APIKEY_PRIVATE'))
    req['Content-Type'] = 'application/json'

    req.body = {
      Messages: [
        {
          From: {
            Email: 'info3@offsetcodecraft.site',
            Name: 'OffsetCodeCraft'
          },
          To: [
            {
              Email: to,
              Name: 'User'
            }
          ],
          Subject: subject,
          TextPart: text
        }
      ]
    }.to_json

    res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(req)
    end

    res.code == '200' ? JSON.parse(res.body) : { error: res.body }
  end
end
