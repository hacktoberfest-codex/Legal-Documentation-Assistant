const axios = require('axios');
const cheerio = require('cheerio');

async function getCaseDetails(params) {
    const uriHeader = "https://indiankanoon.org/search/?formInput=";
    const uriFooter = "doctypes%3A+supremecourt+sortby%3Amostrecent";
    const casePrompt = params.split(' ').join('+');
    const url = uriHeader + casePrompt + uriFooter;
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);
    
    const resultData = $('.result_title')
      .slice(0, 2)
      .map((i, element) => {
        const anchor = $(element).find('a');
        const text = anchor.text().trim(); 
        const href = "https://indiankanoon.org" + anchor.attr('href'); 
        return { text, href };
      })
      .get();

      return resultData;
}

// getCaseDetails("Creating an affidavit to add an alias to your name.");

module.exports = {getCaseDetails};
