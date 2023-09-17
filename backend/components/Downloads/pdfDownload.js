const puppeteer = require('puppeteer');

(async function pdfDownload(html) {
  const browser = await puppeteer.launch({headless:'new'})
  const page = await browser.newPage();
  await page.goto(html, {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'hn.pdf', format: 'a4' });

  await browser.close();
})();

module.exports= {pdfDownload}