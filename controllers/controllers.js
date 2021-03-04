const getCountries = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send({
        countryNames: Object.getOwnPropertyNames(req.app.covidData)
    });
};

const getCountryData = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send({
        countryData: req.app.covidData[req.params.country]
    });
};

const pageNotFound = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log('Page cannot be found');
    res.status(404).end();
};

module.exports = {
    getCountries: getCountries,
    getCountryData: getCountryData,
    pageNotFound: pageNotFound
}