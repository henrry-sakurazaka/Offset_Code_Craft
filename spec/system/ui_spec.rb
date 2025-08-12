RSpec.describe 'topページ', type: :system do
  it 'タイトルが表示される' do
    visit '/'
    expect(page).to have_css('.catch', text: /Where Imagination\s*Meets Possibility\s*Unleashing the Power\s*of Innovation/i)
    expect(page).to have_css(".move-text", text: /portfolio 2023-2024/i, visible: :all)
  end

  it 'オーディオ装置のアイコン、画像が表示されている' do
    visit '/'
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    expect(page).to have_css("img[src*='pexels-laker-6157040']")
    expect(page).to have_css("img[src*='my_portfolio_img2/works6.png']")
    expect(page).to have_css("img[src*='my_portfolio_img2/works7.png']")
    expect(page).to have_css("img[src*='my_portfolio_img2/works3.png']")
    expect(page).to have_css("img[src*='my_portfolio_img2/works1.png']")
    expect(page).to have_css("img[src*='my_portfolio_img2/works5.png']")
   /Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/offset_code_craft/app/assets/my_portfolio_img2
    # background-image を検証
    bg = page.evaluate_script(
      "window.getComputedStyle(document.querySelector('.catch')).backgroundImage"
    )
    expect(bg).to match(/images_mountain\/2\.jpg/)
  end
end

RSpec.describe 'aboutページ', type: :system do
  it 'タイトルが表示される' do
    visit about_path
    expect(page).to have_css(".catch", text: /Creating Boundless\s*Wonders Shaping\s*the Future\s*AKIRA SAKAMOTO/i)  
  end

  it 'オーディオ装置のアイコン、画像が表示されている' do
    visit about_path
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    expect(page).to have_css("img[src*='pexels-tara-winstead-6489631']")
    expect(page).to have_css("img[src*='images/selfy.png']")
    bg = page.evaluate_script(
      "window.getComputedStyle(document.querySelector('.img-container ')).backgroundImage"
    )
    # background-image を検証
    bg = page.evaluate_script(
      "window.getComputedStyle(document.querySelector('.catch')).backgroundImage"
    )
    expect(bg).to match(/images_mountain\/2\.jpg/)
  end 
end

RSpec.describe 'contactページ', type: :system do
  it 'タイトルが表示される' do
    visit contact_path
    expect(page).to have_css(".text", text: /Feel free\s*to drop\s*me a\s*message/i)
  end

  it 'オーディオ装置のアイコン、画像が表示されている' do
    visit contact_path
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    expect(page).to have_css("img[src*='pexels-ready-made-3850652']")
  end
end

