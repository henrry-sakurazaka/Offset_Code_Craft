# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigation', type: :system do
  before do
    driven_by(:selenium_chrome)
  end

  context 'when on the Top page' do
    before { visit home_path }

    %w[About ABOUT].each do |text|
      it "リンク '#{text}' から Contactページへ移動できること" do
        expect(page).to have_link(text, href: about_path, visible: true)
        click_link text
        sleep 3
        expect(current_path).to eq(about_path)
      end
    end

    it 'Contactページへリンクで移動できること' do
      find('.navi').hover
      expect(page).to have_link('Contact', href: contact_path)
      click_link 'Contact'
      sleep 3
      expect(current_path).to eq(contact_path)
    end

    it 'Architecture Chartがページリンクで移動できること' do
      link_href = image_path('Blank diagram-12.png')
      expect(page).to have_link('Architecture Chart', href: link_href)

      click_link 'Architecture Chart'
      sleep 3

      expect(URI(current_url).path).to eq(URI(link_href).path)
    end

    it 'works画像からリンク先へ移動できること' do
      target_url = 'https://reminder5-27ef0.web.app'

      expect(page).to have_link(nil, href: target_url)

      # より柔軟に指定（class名の間にスペース）
      find("li.works-li.reminder-img a[href=\"#{target_url}\"]").click

      sleep 10

      # パス部分だけ比較して末尾スラッシュ差異にも対応
      expect(URI.parse(page.current_url).host).to eq(URI.parse(target_url).host)
    end


    it 'Code Detailsからリンク先へ移動できること（各リンク）' do
      links = [
        { class: '.git.zero', href: 'https://github.com/henrry-sakurazaka/Reminder' },
        { class: '.git.one', href: 'https://github.com/henrry-sakurazaka/Hello-TypeScript' },
        { class: '.git.two', href: 'https://github.com/henrry-sakurazaka/Megumi-Completa-Official' },
        { class: '.git.three', href: 'https://github.com/henrry-sakurazaka/Engineer-Post' }
      ]

      links.each do |link|
        expect(page).to have_link('Code Detail', href: link[:href], visible: true)
        expect(page).to have_selector(link[:class])
        find(link[:class].to_s, text: 'Code Detail').click
        sleep 10
        expect(page.current_url).to eq(link[:href])
      end
    end
  end

  context 'when on the About page' do
    before { visit about_path }

    %w[Contact CONTACT].each do |text|
      it "リンク '#{text}' から Contactページへ移動できること" do
        expect(page).to have_link(text, href: contact_path, visible: true)
        click_link text
        sleep 3
        expect(current_path).to eq(contact_path)
      end
    end

    it 'TopリンクでTopページへ移動できること（.navi をホバーして表示）' do
      find('.navi').hover
      expect(page).to have_link('Top', href: home_path, visible: true)
      click_link 'Top'
      expect(page).to have_current_path(home_path, ignore_query: true)
    end

    %w[Akira Sakamoto].each do |text|
      it 'Topページへリンク移動できること' do
        expect(page).to have_link(text, href: home_path, visible: true)
        click_link text
        sleep 3
        expect(current_path).to eq(home_path)
      end
    end
  end

  context 'when on the Contact page' do
    before { visit contact_path }

    it 'Aboutページへリンク移動できること' do
      find('.navi').hover
      expect(page).to have_link('About', href: about_path)
      click_link 'About'
      sleep 10
      expect(page).to have_current_path(about_path)
    end

    it 'TopリンクからTopページへ移動できること' do
      expect(page).to have_link('Top', href: home_path, visible: true)
      click_link 'Top'
      sleep 3
      expect(current_path).to eq(home_path)
    end

    %w[Akira Sakamoto].each do |text|
      it "リンク '#{text}' から Topページへ移動できること" do
        expect(page).to have_link(text, href: home_path, visible: true)
        click_link text
        sleep 3
        expect(current_path).to eq(home_path)
      end
    end
  end
end
