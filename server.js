const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const api = require('./routes/routes');

const app = express();
app.use('/api/', api);
app.use(express.static(path.join(__dirname, './client/build')));

const PORT = 5000;
const URL = 'https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/';
const fetchSettings = { method: 'Get' };

const structureData = (json) => {
    const covidData = json.reduce((acc, item) => {
        if (!acc[item.country]) {
            acc[item.country] = {}
        }

        if (!acc[item.country][item.indicator]) {
            acc[item.country][item.indicator] = []
        }

        acc[item.country][item.indicator].push({
            weeklyCount: item.weekly_count,
            yearWeek: item.year_week,
        });
        return acc;
    }, {});

    validateData(covidData);
    app.covidData = covidData;
}

// Remove countries with incomplete data
const validateData = (data) => {
    for (const country in data) {
        if (!isDataValid(data[country])) {
            delete data[country];
        }
    }
}

// Checks if cases and deaths are for the same period
const isDataValid= (data) => {
    return data.cases.map(entry => entry.yearWeek).join(',') ===
               data.deaths.map(entry => entry.yearWeek).join(',');
}

fetch(URL, fetchSettings)
    .then(res => res.json())
    .then((json) => structureData(json))
    .catch(err => {
        console.log(`Encountered an error while trying to retrieve data from ${url}`);
    });

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});