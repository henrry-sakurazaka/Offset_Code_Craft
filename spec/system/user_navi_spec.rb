require 'rails_helper'

RSpec.describe 'Navigation', type: :system do
  before do
    driven_by(:selenium_chrome)
  end

  it 'TopページからAboutページへリンクで移動できるか' do
    visit root_path

    expect(page).to have_link('About', href: about_path)

    click_link 'About'

    expect(current_path).to eq(about_path)

    expect(page).to have_link('ABOUT', href: about_path)

    click_link 'ABOUT'

    expect(current_path).to eq(about_path)
  end

  it 'TopページからContactページへリンクで移動できるか' do
    visit root_path

    find('.nav').hover
    click_link 'Contact'

    expect(current_path).to eq(contact_path)
  end

  it 'Archtecture Chartがページリンクで移動できるか' do
    visit root_path

    expect(page).to have_link('Architecture Chart', href: image_path('Blank diagram-12.png'))

    click_link 'Archtecture Chart'

    expect(page.current_path).to eq(image_path('Blank diagram-12.png'))
  end

  it 'works 画像からリンク先へ移動できるか' do
    visit root_path

    # リンクが存在することを確認（hrefで探す）
    expect(page).to have_link(nil, href: 'https://reminder5-27ef0.web.app')

    # 画像の親リンクをクリックする例（works-container内のリンクを探す）
    find('li.works-li a[href="https://reminder5-27ef0.web.app"]').click

    expect(page.current_url).to eq('https://reminder5-27ef0.web.app/')
  end

  # it "Code Details からリンク先へ移動できるか" do
  #     visit root_path

  #     # Reminder
  #     expect(page).to have_link("Code Detail", href: "https://github.com/henrry-sakurazaka/Reminder", class: "zero")
  #     find("a.zero", text: "Code Detail").click
  #     expect(page.current_url).to eq("https://github.com/henrry-sakurazaka/Reminder")
  #     visit root_path

  #     # Hello-TypeScript
  #     expect(page).to have_link("Code Detail", href: "https://github.com/henrry-sakurazaka/Hello-TypeScript", class: "one")
  #     find("a.one", text: "Code Detail").click
  #     expect(page.current_url).to eq("https://github.com/henrry-sakurazaka/Hello-TypeScript")
  #     visit root_path

  #     # Megumi
  #     expect(page).to have_link("Code Detail", href: "https://github.com/henrry-sakurazaka/Megumi-Completa-Official", class: "two")
  #     find("a.two", text: "Code Detail").click
  #     expect(page.current_url).to eq("https://github.com/henrry-sakurazaka/Megumi-Completa-Official")
  #     visit root_path

  #     # Engineer-Post
  #     expect(page).to have_link("Code Detail", href: "https://github.com/henrry-sakurazaka/Engineer-Post", class: "three")
  #     find("a.three", text: "Code Detail").click
  #     expect(page.current_url).to eq("https://github.com/henrry-sakurazaka/Engineer-Post")
  # end

  it 'Code Details からリンク先へ移動できるか' do
    visit root_path

    links = [
      { class: '.zero', href: 'https://github.com/henrry-sakurazaka/Reminder' },
      { class: '.one',    href: 'https://github.com/henrry-sakurazaka/Hello-TypeScript' },
      { class: '.two',    href: 'https://github.com/henrry-sakurazaka/Megumi-Completa-Official' },
      { class: '.three',  href: 'https://github.com/henrry-sakurazaka/Engineer-Post' }
    ]

    links.each do |link|
      # リンクが存在するか
      expect(page).to have_link('Code Detail', href: link[:href])
      expect(page).to have_selector(link[:class])

      # 実際にクリックして遷移を確認
      find("#{link[:class]} a", text: 'Code Detail').click
      expect(page.current_url).to eq(link[:href])

      visit root_path # 次のリンクテストのために戻る
    end
  end

  it 'AboutページからContactページへリンクで移動できるか' do
    visit about_path

    expect(page).to have_link('Contact', href: contact_path)
    expect(page).to have_link('CONTACT', href: contact_path)

    click_link 'Contact'
    click_link 'CONTACT'

    expect(current_path).to eq(contact_path)
  end

  it 'AboutページからTopページにリンク移動できるか' do
    visit about_path

    find('.nav').hover
    click_link 'Top'

    expect(current_path).to eq(home_path)

    expect(page).to have_link('Akira', href: home_path)
    expect(page).to have_link('Sakamoto', href: home_path)

    click_link 'Akira'
    click_link 'Sakamoto'

    expect(current_path).to eq(home_path)
  end

  it 'ContactページからTopページへリンク移動できるか' do
    visit contact_path

    expect(page).to have_link('Top', href: home_path)
    expect(page).to have_link('Akira', href: home_path)
    expect(page).to have_link('Sakamoto', href: home_path)

    click_link 'Top'
    click_link 'Akira'
    click_link 'Sakamoto'

    expect(current_path).to eq(home_path)
  end

  it 'ContactページからAboutページへリンク移動できるか' do
    visit contact_path

    find('.navi').hover

    click_link 'About'

    expect(current_path).to eq(about_path)
  end
end
