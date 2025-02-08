# ** Event Scraper & Listing Website **

## ** Overview **

This project is a **full-stack web application** that automatically scrapes event details from event websites for Sydney, Australia. The scraped events are displayed beautifully on the website, allowing users to explore and book tickets. Users can enter their email before being redirected to the event's original website. The backend runs a scheduled job every 24 hours to fetch and update event details.

## ** Live Demo **

*Event Page:* **https://event-scraper-chi.vercel.app/**


## **Repository Structure(Only Main things is added here)**
📦 project-root
 ┣ 📂 backend
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 scraper
 ┃ ┣ 📜 cronJob.js
 ┃ ┣ 📜 server.js
 ┣ 📂 frontend
 ┃ ┣ 📂 public
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 constants
 ┃ ┃ ┣ 📂 interfaces
 ┃ ┃ ┣ 📜 main.tsx
 ┃ ┃ ┣ 📜 App.tsx
 ┣ 📜 README.md

## **Tech Stack**

**Backend:**

Framework: Express.js

Scraping: Cheerio

Database: No database used, event data is fetched dynamically

Job Scheduling: Node-cron

Security & API Handling: CORS, dotenv

Deployment: Render (tested via Postman)



**Frontend:**

Framework: React.js (Vite)

UI Library: MUI (Material-UI)

Routing: React Router

State Management: React Hooks

Animation: Custom Loader

Deployment: Vercel


## **Features**

Event Scraping: Automatically fetches event data daily.

Beautiful UI: Displays events in a well-structured, user-friendly manner.

Email Capture: Users must enter an email before ticket redirection.

Routing: React Router ensures seamless navigation.

Error Handling: 404 page redirects users when an invalid path is accessed.

Security: API keys and sensitive data are stored in environment variables.


**Setup Instructions**

*Backend Setup:*

Clone the repository and routing to backend folder: 

Install dependencies:

npm install

Creating .env file:

Start the server:
nodemon server.js (I have installed nodemon but in package.json I have added "dev":"nodemon server.js" -> npm run dev)


*Frontend Setup:*

Navigate to frontend:

cd frontend

Install dependencies:

npm install

Create a .env file and add my api url there

Start the frontend:  npm run dev


## **Challenges Faced**

Scraping Limitations: Some event websites have anti-scraping mechanisms, requiring careful request handling.

Large and Mix Data of Events: In first, I got just messy data from eventbrite api, I get overwhelmed, then I created well plan and solved it by converting to json, parsing data, and mapping them by extracting only important data which is needed for front

Deployment Issues: Configuring environment variables correctly for Render deployment.

502 Bad Gateway Error: After deploying I got 502 Gateway error after 5 min from deploying.


**Future Improvements**

Database Integration: Store event data for better analytics.

Authentication: Allow users to save favorite events.

More Cities: Expand beyond Sydney to other locations.

## **Contributing**

Feel free to fork the repo and submit pull requests for improvements!