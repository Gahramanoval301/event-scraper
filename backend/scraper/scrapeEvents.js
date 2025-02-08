const axios = require('axios');
const cheerio = require('cheerio');
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();

const fetchEvents = async () => {
    try {
        const response = await axios.get(process.env.EVENT_BRINT_URL)
        const $ = cheerio.load(response.data);

        // Extract the JSON-LD script from the HTML
        const jsonData = $('script[type="application/ld+json"]').html();
        const parsedData = JSON.parse(jsonData);

        if (parsedData) {
            const events = parsedData.itemListElement.map(({ item }) => ({
                id: uuidv4(),
                startDate: item.startDate,
                endDate: item.endDate,
                url: item.url,
                description: item.description, 
                location: item.location, 
                image: item.image, 
                name: item.name, 
            }));
            return events;
        }
    } catch (error) {
        console.error("Error scraping events:", error);
        return [];
    }
}

module.exports = { fetchEvents };