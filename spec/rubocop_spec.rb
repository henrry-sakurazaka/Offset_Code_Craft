# frozen_string_literal: true

require 'open3'
require 'rails_helper'

RSpec.describe 'Code Quality and Navigation System Tests' do
  describe 'RuboCop' do
    it 'has no offenses' do
      stdout, stderr, status = Open3.capture3('bundle exec rubocop')
      puts stdout unless status.success?
      puts stderr unless stderr.empty?
      expect(status.success?).to be true
    end
  end

  describe 'Navigation', type: :system do
    before { driven_by(:selenium_chrome) }

    def expect_and_click_link(text, path)
      expect(page).to have_link(text, href: path)
      click_link text
      expect(current_path).to eq(path)
    end

    context 'when on the Top page' do
      before { visit home_path }

      %w[About ABOUT].each do |text|
        it "navigates to About page via '#{text}' link" do
          expect(page).to have_link(text, href: about_path)
          click_link text
          expect(current_path).to eq(about_path)
      end

      it 'navigates to Contact page via "Contact" link in nav' do
        find('.navi').hover
        expect_and_click_link('Contact', contact_path)
      end
    end

    context 'when on the About page' do
      before { visit about_path }

      %w[Contact CONTACT].each do |text|
        it "navigates to Contact page via '#{text}' link" do
          expect(page).to have_link(text, href: contact_path)
          click_link text
          expect(current_path).to eq(contact_path)
        end
      end

      it 'navigates to Top page via nav links "Top"' do
        find('.navi').hover
        expect_and_click_link('Top', home_path)
      end

      it 'navigates to Top page via nav links "Akira Sakamoto"' do
        %w[Akira Sakamoto].each do |text|
          expect(page).to have_link(text, href: home_path)
          click_link text
          expect(current_path).to eq(home_path)
          visit about_path
        end
      end
    end

    context 'when on the Contact page' do
      before { visit contact_path }
      
      %w[Akira Sakamoto].each do |text|
        it "navigates to Top page via '#{text}' link" do
          expect(page).to have_link(text, href: home_path)
          click_link text
          expect(current_path).to eq(home_path)
        end
      end

      it 'navigates to About page via "About" link' do
        find('.navi').hover
        expect_and_click_link('About', about_path)
      end


      it 'navigates to Top page via nav links "Top"' do
        expect_and_click_link('Top', home_path)
      end
    end
  end
end
