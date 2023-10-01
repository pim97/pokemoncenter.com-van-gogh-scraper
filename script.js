const Scrappey = require('scrappey-wrapper');

// Replace the following details with your own details
const SCRAPPEY_API_KEY = 'scrappey_key_from_scrappey.com';

// Create an instance of Scrappey
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

// Optional to add proxy, one is added if not added
const PROXY = 'http://user:pass@host:port'

async function run() {
    try {

        /**
         * Creates a session
         */
        const session = await scrappey.createSession({
            // proxy: PROXY //optional
        })

        const scrape = await scrappey.get({
            "url": "https://www.pokemoncenter.com/en-ca/search/van-gogh",
            "session": session,
        })

        console.log(scrape)

    } catch (error) {
        console.error(error);
    }
}

run();