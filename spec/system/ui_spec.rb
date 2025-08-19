# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Static pages', type: :system do
  def expect_audio_icons_and_images(*additional_images)
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    additional_images.each do |img_src_part|
      expect(page).to have_css("img[src*='#{img_src_part}']")
    end
  end

  describe 'topページ' do
    before { visit root_path }

    it 'タイトルが表示される' do
      expect(page).to have_css('.catch',
                               text: /Where Imagination\s*Meets Possibility\s*Unleashing the Power\s*of Innovation/i)
      expect(page).to have_css('.move-text', text: /portfolio 2023-2024/i, visible: :all)
    end

    it 'オーディオ装置のアイコン、画像が表示されている' do
      expect_audio_icons_and_images(
        'pexels-laker-6157040',
        'works6',
        'works7',
        'works3',
        'works1',
        'works5'
      )
      # background-image を検証
      bg = page.evaluate_script(
        "window.getComputedStyle(document.querySelector('.catch')).backgroundImage"
      )
      expect(bg).to match(%r{images_mountain/2.*\.jpg})
    end
  end

  describe 'aboutページ' do
    before { visit about_path }

    it 'タイトルが表示される' do
      expect(page).to have_css('.catch', text: /Creating Boundless\s*Wonders Shaping\s*the Future\s*AKIRA SAKAMOTO/i)
    end

    it 'オーディオ装置のアイコン、画像が表示されている' do
      expect_audio_icons_and_images('pexels-tara-winstead-6489631', 'selfy')

      # background-image を検証
      bg = page.evaluate_script(
        "window.getComputedStyle(document.querySelector('.catch')).backgroundImage"
      )
      expect(bg).to match(%r{images_mountain/2.*\.jpg})
    end
  end

  describe 'contactページ' do
    before { visit contact_path }

    it 'タイトルが表示される' do
      expect(page).to have_css('.text', text: /Feel free\s*to drop\s*me a\s*message/i)
    end

    it 'オーディオ装置のアイコン、画像が表示されている' do
      expect_audio_icons_and_images('pexels-ready-made-3850652')
    end
  end
end
