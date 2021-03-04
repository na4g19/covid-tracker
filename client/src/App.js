import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import './main.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <CountryDropdown />
                <CovidChart />
            </div>
        );
    }
}

class CovidChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            datasets: [
                {
                    label: 'Cases',
                    fill: false,
                    lineTension: 0.15,
                    borderColor: 'rgba(0, 255, 0, 0.9)',
                    borderWidth: 3,
                    pointRadius: 1,
                    data: [],
                },
                {
                    label: 'Deaths',
                    fill: false,
                    lineTension: 0.15,
                    borderColor: 'rgba(255, 0, 0, 0.9)',
                    borderWidth: 4,
                    pointRadius: 1,
                    data: [],
                }
            ],
        };
    }

    componentDidMount() {
        refreshChart = this.updateChart.bind(this);
    }

    updateChart(country) {
        axios.get(`/api/countries/${country}`)
            .then(res => {
                const data = res.data.countryData;
                const newDatasets = this.state.datasets.slice();

                newDatasets[0].data = data['cases'].map(entry => entry.weeklyCount);
                newDatasets[1].data = data['deaths'].map(entry => entry.weeklyCount);

                this.setState( () => ({
                    datasets: newDatasets,
                    labels: data['cases'].map(entry => entry.yearWeek)
                }));
            })
            .catch(err => {
                console.log('Could not retrieve data from the server');
            })
    }

    render() {
        return (
            <div id='covid-chart'>
                <Line
                    data = {this.state}
                    options = {{
                        title: {
                            display: true,
                            text: 'Weekly Covid Cases and Deaths by Country',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        maintainAspectRatio: false,
                    }}
                />
            </div>
        );
    }
}


class CountryDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnTitle: "Select Country",
            countries: []
        };
    }

    async componentDidMount() {
        await axios.get('/api/countries')
              .then(res => {
                  this.setState({ countries: res.data.countryNames });
              })
              .catch(err => {
                  console.log('Error occured while loading country names');
              })
    }

    render() {
        return (
            <DropdownButton id='dropdown-button' title={this.state.btnTitle} onSelect={(e) => refreshChart(e)}>
                {this.state.countries.map(country => (
                    <Dropdown.Item eventKey={country} key={country} onClick={this.changeTitle}>
                        {country}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        );
    }

    changeTitle = (event) => {
        let newTitle = event.target.textContent;
        this.setState({ btnTitle: newTitle });
    }
}

function refreshChart(country) {}
