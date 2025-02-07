const cron = require('node-cron');
const { fetchEvents } = require('./scraper/scrapeEvents');

const start = () => {
    // run every day at midnight 
    cron.schedule('0 0 * * *', async () => {
        console.log('Cron Job: Scraping events...');
        const events = await fetchEvents();
        console.log('Scraped events:', events);

        //? maybe db procedures
    });
};

module.exports = { start };