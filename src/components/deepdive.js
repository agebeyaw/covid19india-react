import AgeChart from './Charts/agechart';
import AllStatesChart from './Charts/allstates';
import DailyConfirmedChart from './Charts/dailyconfirmedchart';
import GenderChart from './Charts/genderchart';
import NationalityChart from './Charts/nationalitychart';
import TotalConfirmedChart from './Charts/totalconfirmedchart';
import TravelChart from './Charts/travelchart';

import axios from 'axios';
import React, {useState, useEffect} from 'react';

function DeepDive(props) {
  const [fetched, setFetched] = useState(false);
  const [timeseries, setTimeseries] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [statesTimeSeries, setStatesTimeSeries] = useState([]);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
      const [
        response,
        rawDataResponse,
        stateDailyResponse,
      ] = await Promise.all([
        axios.get(process.env.REACT_APP_API_URL + '/api/data.json'),
        axios.get(process.env.REACT_APP_API_URL + '/api/raw_data.json'),
        axios.get(process.env.REACT_APP_API_URL + '/api/states_daily.json'),
      ]);
      setTimeseries(response.data.cases_time_series);
      setStatesTimeSeries(stateDailyResponse.data.states_daily);
      setRawData(rawDataResponse.data.raw_data);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cards-container">
      <section className="cards">
        <div className="card fadeInUp" style={{animationDelay: '0.7s'}}>
          <TotalConfirmedChart
            title="Ethiopia - Total Cases"
            timeseries={timeseries}
          />
        </div>

        <div className="card fadeInUp" style={{animationDelay: '0.7s'}}>
          <DailyConfirmedChart
            title="Ethiopia - Daily Cases"
            timeseries={timeseries}
          />
        </div>

        <div className="card fadeInUp" style={{animationDelay: '0.7s'}}>
          <AllStatesChart
            title="States - Total Cases"
            data={statesTimeSeries}
          />
        </div>

        <div className="card fadeInUp" style={{animationDelay: '0.7s'}}>
          <GenderChart title="Patient Gender" data={rawData} />
        </div>

        <div className="card fadeInUp" style={{animationDelay: '0.7s'}}>
          <AgeChart title="Patient Age" data={rawData} />
        </div>

        <div className="card fadeInUp" style={{animationDelay: '0.7s'}}>
          <NationalityChart title="Patient Nationality" data={rawData} />
        </div>

        <div className="card fadeInUp" style={{animationDelay: '0.7s'}}>
          <TravelChart title="Recent Travel Country" data={rawData} />
        </div>
      </section>
    </div>
  );
}

export default DeepDive;
