# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigation', type: :system do
  before do
    driven_by(:selenium_chrome)
  end

  def expect_and_click_link(text, path)
    expect(page).to have_link(text, href: path)
    click_link text
    expect(current_path).to eq(path)
  end

  context 'when on the Top page' do
    before { visit root_path }

     %w[About ABOUT].each do |text|
      it "リンク '#{text}' から Contactページへ移動できること" do
        expect(page).to have_link(text, href: about_path)
        click_link text
        expect(current_path).to eq(about_path)
      end
    end
   
    it 'Contactページへリンクで移動できること' do
      find('.nav-container.navi').hover
      expect_and_click_link('Contact', contact_path)
    end

    it 'Architecture Chartがページリンクで移動できること' do
      expect(page).to have_link('Architecture Chart', href: image_path('Blank diagram-12.png'))
      click_link 'Architecture Chart'
      expect(current_path).to eq(image_path('Blank diagram-12.png'))
    end

    it 'works画像からリンク先へ移動できること' do
      expect(page).to have_link(nil, href: 'https://reminder5-27ef0.web.app')
      find('li.works-li a[href="https://reminder5-27ef0.web.app"]').click
      expect(page.current_url).to eq('https://reminder5-27ef0.web.app/')
    end

    it 'Code Detailsからリンク先へ移動できること（各リンク）' do
      links = [
        { class: '.zero', href: 'https://github.com/henrry-sakurazaka/Reminder' },
        { class: '.one', href: 'https://github.com/henrry-sakurazaka/Hello-TypeScript' },
        { class: '.two', href: 'https://github.com/henrry-sakurazaka/Megumi-Completa-Official' },
        { class: '.three', href: 'https://github.com/henrry-sakurazaka/Engineer-Post' }
      ]

      links.each do |link|
        visit root_path
        expect(page).to have_link('Code Detail', href: link[:href])
        expect(page).to have_selector(link[:class])
        find("#{link[:class]} a", text: 'Code Detail').click
        expect(page.current_url).to eq(link[:href])
      end
    end
  end

  context 'when on the About page' do
    before { visit about_path }

    %w[Contact CONTACT].each do |text|
      it "リンク '#{text}' から Contactページへ移動できること" do
        expect(page).to have_link(text, href: contact_path)
        click_link text
        expect(current_path).to eq(contact_path)
      end
    end

    it 'TopリンクでTopページへ移動できること（.navi をホバーして表示）' do
        find('.nav-container.navi').hover
        expect(page).to have_link('Top', href: home_path)
        click_link 'Top'
        expect(page).to have_current_path(home_path, ignore_query: true)
    end

    %w[Akira Sakamoto].each do |text|
      it 'Topページへリンク移動できること' do   
        expect(page).to have_link(text, href: home_path)
        click_link text
        expect(current_path).to eq(home_path)
      end
    end
  end

  context 'when on the Contact page' do
    before { visit contact_path }

    %w[Akira Sakamoto].each do |text|
      it "リンク '#{text}' から Topページへ移動できること" do    
        expect(page).to have_link(text, href: home_path)
        click_link text
        expect(current_path).to eq(home_path)
      end
    end

    it "TopリンクからTopページへ移動できること" do
        expect(page).to have_link('Top', href: home_path)
        click_link 'Top'
        expect(current_path).to eq(home_path)
    end

    it 'Aboutページへリンク移動できること' do
      find('.nav-container.navi').hover
      expect_and_click_link('About', about_path)
    end
  end
end