RSpec.describe 'topページ', type: :system do
  it 'タイトルが表示される' do
    visit '/'
    expect(page).to have_css('.catch', text: /Where Imagination\s*Meets Possibility\s*Unleashing the Power\s*of Innovation/i)
    expect(page).to have_css(".move-text",text: /portfolio 2023-2024/i, visible: :all)
  end

  it 'オーディオ装置のアイコン、画像が表示されている' do
    visit '/'
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    expect(page).to have_css("img[src*='pexels-laker-6157040']")
    expect(page).to have_css("img[src*='works6.png']")
    expect(page).to have_css("img[src*='works7.png']")
    expect(page).to have_css("img[src*='works3.png']")
    expect(page).to have_css("img[src*='works1.png']")
    expect(page).to have_css("img[src*='works5.png']")

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
    expect(page).to have_css("img[src*='selfy.png']")
    expect(page).to have_css(".self-img-container", style: /background-image:.*brick-wall-room-architecture-indoor-concept\.jpg/)
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
