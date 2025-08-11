RSpec.describe 'topページ', type: :system do
  it 'タイトルが表示される' do
    visit '/'
    expect(page).to have_text(/Where Imagination Meets Possibility Unleashing the Power of Innovation/i)
  end

  it 'オーディオ装置のアイコン、画像が表示されている' do
    visit '/'
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    expect(page).to have_css("img[src*='pexels-laker-6157040']")
    expect(page).to have_css("[style*='background-image'][style*='images_mountain/2.jpg']")
    expect(page).to have_css("img[src*='works1.png']")
    expect(page).to have_css("img[src*='works3.png']")
    expect(page).to have_css("img[src*='works5.png']")
    expect(page).to have_css("img[src*='works6.png']")
    expect(page).to have_css("img[src*='works7.png']")
  end
end

RSpec.describe 'aboutページ', type: :system do
  it 'タイトルが表示される' do
    visit about_path
    expect(page).to have_text(/Creating Boundless Wonders Shaping the Future AKIRA SAKAMOTO/i)  
    expect(page).to have_text(/portfolio 2023-2024/i, visible: :all)
  end

  it 'オーディオ装置のアイコン、画像が表示されている' do
    visit about_path
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    expect(page).to have_css("img[src*='pexels-tara-winstead-6489631']")
    expect(page).to have_css("[style*='background-image'][style*='images_mountain/2.jpg']")
    expect(page).to have_css("img[src*='selfy.png']")
    expect(page).to have_css(".self-img-container", style: /background-image:.*brick-wall-room-architecture-indoor-concept\.jpg/)

  end
end

RSpec.describe 'contactページ', type: :system do
  it 'タイトルが表示される' do
    visit contact_path
    expect(page).to have_text(/Feel free to drop me a message/i)
  end

  it 'オーディオ装置のアイコン、画像が表示されている' do
    visit contact_path
    expect(page).to have_css("img[src*='listen']")
    expect(page).to have_css("img[src*='mute-svgrepo-com']")
    expect(page).to have_css("img[src*='pexels-ready-made-3850652']")
  end
end
