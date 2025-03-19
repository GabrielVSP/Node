const http = require('http');

const USERNAME = 'drive134s';

function getCountries() {

    http.get(`http://api.geonames.org/countryInfoJSON?username=${USERNAME}`, (res) => {

        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const countries = JSON.parse(data).geonames.map(country => `${country.countryName} - ${country.countryCode}` );
                console.log(countries);
            } catch (error) {
                console.error('Error processing data:', error);
            }
        });
    }).on('error', (error) => {
        console.error('Error while fetching data:', error.message);
    });
}

async function getAllCities(countryCode, startRow = 0, allCities = []) {

    const maxRows = 1000;

    if (startRow >= 5000) {
        console.log(`Limit of 5000 cities reached for ${countryCode}.`);
        console.log(allCities);
        return allCities;
    }

    try {
        const response = await fetchCities(countryCode, startRow, maxRows);
        const cities = response.geonames.map(city => city.name);
        allCities = [...allCities, ...cities];

        if (cities.length === maxRows) {
            return getAllCities(countryCode, startRow + maxRows, allCities);
        }

        console.log(`Cities of ${countryCode}:`, allCities);
        return allCities;
    } catch (error) {
        console.error('Error processing data:', error);
        setTimeout(() => getAllCities(countryCode, startRow, allCities), 2000);
    }

}

async function fetchCities(countryCode, startRow, maxRows) {
    
    const url = `http://api.geonames.org/searchJSON?country=${countryCode}&featureClass=P&maxRows=${maxRows}&startRow=${startRow}&username=${USERNAME}`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Error fetching cities');
    }

    const data = await res.json();
    if (!data.geonames) {
        throw new Error(`Unexpected response: ${JSON.stringify(data)}`);
    }

    return data;
}

getCountries();
getAllCities('BR');