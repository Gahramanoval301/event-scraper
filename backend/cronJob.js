const cron = require('node-cron');
const { fetchEvents } = require('./scraper/scrapeEvents');

const fetchWithRetry = async (retries = 3, delay = 1000) => {
    try {
        return await fetchEvents(); // Your actual API call or scraping function
    } catch (error) {
        if (retries === 0) {
            throw error;
        }
        console.log(`Error occurred. Retrying... ${retries} attempts left`);
        await new Promise(res => setTimeout(res, delay)); // Delay between retries
        return fetchWithRetry(retries - 1, delay);
    }
};

const start = () => {
    // Run every day at midnight
    cron.schedule('0 0 * * *', async () => {
        try {
            console.log('Cron Job: Scraping events...');
            const events = await fetchWithRetry();
            console.log('Scraped events:', events);
        } catch (error) {
            console.error('Error during cron job execution:', error);
            // You can handle error reporting here (e.g., sending alerts)
        }
    });
};

module.exports = { start };
