const { fetchEvents } = require("../scraper/scrapeEvents");

const getEvents = async (req, res) => {
    try {
        const events = await fetchEvents(); 
        console.log(events);
        res.status(200).json(events);  
    } catch (error) {
        console.error('Error in getEvents controller:', error);
        res.status(500).json({ message: 'Error fetching events' });
    }
};

module.exports = { getEvents };
