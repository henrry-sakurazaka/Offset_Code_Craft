import { test, expect } from '@playwright/test';

const baseURL = 'http://localhost:3000';

test('Topページでリンククリックしてリンク先へ移動できるか', async ({ page }) => {
  const architex_path = "http://localhost:3000/assets/Blank%20diagram-12-77fc3dc8.png";
  const links = [{ className: 'a.about'}, { className: 'div.big-about' }];
  const nav = page.locator('.navi');
  const targetZ = page.locator('.center.inview .center-inner .inner .slide-in-nav');

  await page.goto(`${baseURL}/home`, { waitUntil: 'domcontentloaded' });
  
  await page.waitForSelector('.big-title2', {
    state: 'visible', 
    timeout: 15000   
  });

  for(const link of links) {
    await page.click(link.className, { timeout: 3000 });
    await expect(page).toHaveURL(`${baseURL}/about`);
    await page.goBack();
  }
  await nav.hover();
  await targetZ.waitFor({ state: 'visible' });
  await page.waitForTimeout(2000);
  await targetZ.click({ force: true });
  await expect(page).toHaveURL(`${baseURL}/contact`);
  await page.goBack();
  
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    });

  await page.click('.architecture .architex');
  await expect(page).toHaveURL(`${architex_path}`);
  await page.goBack();
});

test('Topページのworks画像からリンク先へ移動できるか', async({ page }) => {
    const imgDatas = [
        { className: '.works-li a.reminder-img .master .works-img.lion', href: 'https://reminder5-27ef0.web.app' },
        { className: '.works-li a.typescript-img .master .works-img.tiger', href: 'https://hello-typescript-8a1d9.web.app' },
        { className: '.works-li a.mountain-img .master .works-img.snake', href: 'http://sakurazaka.s324.xrea.com/mountain-view/mountain.html' },
        { className: '.works-li a.megumi-completa-img .master .works-img.leopard', href: 'http://sakurazaka.s324.xrea.com/megumi-completa/megumi-completa3/HELLO5.html' },
        { className: '.works-li a.engineer-post-img .master .works-img.elephant', href: 'http://sakurazaka.s324.xrea.com/products-app/bbs.php' }
    ]                                                                 
    await page.goto(`${baseURL}/home`, { waitUntil: 'domcontentloaded' });
  
    for(const data of imgDatas) {
        const targetData = page.locator(data.className);
        await page.waitForTimeout(2000);
        await page.evaluate(() => {
            document.querySelectorAll('a[target="_blank"]')
            .forEach(a => a.removeAttribute('target'));
        })
        await page.evaluate(() => {
            window.scroll(0, document.body.scrollHeight);
        });
        await targetData.click();
        await expect(page).toHaveURL(data.href);
        await page.goBack();
    }
});

test('Topページのworks-textからリンク先へ移動できるか', async({ page }) => {
    const infoDatas = [
        { className: '.code-detail .git.zero', href: 'https://github.com/henrry-sakurazaka/Reminder' },
        { className: '.code-detail .git.one', href: 'https://github.com/henrry-sakurazaka/Hello-TypeScript' },
        { className: '.code-detail .git.two', href: 'https://github.com/henrry-sakurazaka/Megumi-Completa-Official' },
        { className: '.code-detail .git.three', href: 'https://github.com/henrry-sakurazaka/Engineer-Post' }
    ];

    await page.goto(`${baseURL}/home`, { waitUntil: 'domcontentloaded'});

    for(const data of infoDatas) {
      const codeDetail = page.locator(data.className)
      await page.waitForTimeout(2000);
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
        });
      await codeDetail.click();
      await expect(page).toHaveURL(data.href);
      await page.goBack();     
    }           
});

test('Aboutページでリンククリックしてリンク先へ移動できるか', async({page}) => {
    const links = [{ className: '.navi .contact' },{ className: 'div.big-contact' }];
    const links2 = [{ className: '.title-name',}, { className: '.sakamoto' }];
    const targetZ = page.locator('.center.inview .center-inner .inner .slide-in-nav2');
    const nav = page.locator('.navi');

     await page.goto(`${baseURL}/about`, { waitUntil: 'domcontentloaded' });

    for(const link of links) {
        const target = page.locator(link.className);

        await nav.waitFor({ state: 'visible', timeout: 15000 });
        await page.waitForTimeout(2000);
        await target.waitFor({ state: 'visible' });
        await page.waitForTimeout(2000);
        await target.click({ force: true });
        await expect(page).toHaveURL(`${baseURL}/contact`);
        await page.goBack();
    }

    await nav.hover();
    await page.waitForTimeout(2000);
    await targetZ.click({ force: true });
    await expect(page).toHaveURL(`${baseURL}/home`);

    for(const link2 of links2) {
        const target3 = page.locator(link2.className);

        await page.waitForTimeout(2000);
        await target3.waitFor({ state: 'visible' });
        await page.waitForTimeout(2000);
        await target3.click({ force: true });
        await expect(page).toHaveURL(`${baseURL}/home`); 
        await page.goBack();       
    }
});

test('Contactページでリンククリックしてリンク先へ移動できるか', async({page}) => {
     const links2 = [{ className: '.title-name',}, { className: '.sakamoto' }];
     const target2 = page.locator('.navi .top');
     const targetW = page.locator('.center.inview .center-inner .inner .slide-in-nav3');
     const nav = page.locator('.navi');
     
    await page.goto(`${baseURL}/contact`, { waitUntil: 'domcontentloaded' });

    await page.waitForSelector('.message', {
      state: 'visible', 
      timeout: 10000    
    });

    await nav.hover();
    await page.waitForTimeout(2000);
    await targetW.click();
    await expect(page).toHaveURL(`${baseURL}/about`);
    await page.goBack();

    await page.waitForTimeout(2000);
    await target2.waitFor({ state: 'visible' });
    await target2.click();
    await expect(page).toHaveURL(`${baseURL}/home`);
    await page.goBack();

    for(const link2 of links2) {
        const link = page.locator(link2.className);

        await link.waitFor({ state: 'visible' });
        await page.waitForTimeout(2000);
        await link.click({ force: true });
        await expect(page).toHaveURL(`${baseURL}/home`); 
        await page.goBack();
    }
});

