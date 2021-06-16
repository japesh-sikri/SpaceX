import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import FilterCard from './components/FilterCard';
import ResultCard from './components/ResultCard';
const axios = require("axios");

function App() {
  const [state, setState] = useState({ year: null, launch: null, land: null });
  const [data, setData] = useState([]);

  const apiCall = async () => {
    var URL = `https://api.spaceXdata.com/v3/launches?limit=100`;
    if (state.year != null) {
      URL = URL.concat(`&launch_year=${state.year}`);
    }
    if (state.launch) {
      URL = URL.concat(`&launch_success=${state.launch}`);
    }
    if (state.land) {
      URL = URL.concat(`&land_success=${state.land}`);
    }
    const data1 = await axios.default.get(URL);
    console.log(data1);
    setData(data1.data);
    console.log(data);
  }

  useEffect(apiCall, [state]);

  const yearSelect = id => {
    const element = document.getElementById(id);
    element.classList.remove('bg-green-400');
    element.classList.add('bg-green-600');

    for(var i = 2006; i < 2021; i++) {
      const ele = document.getElementById(i);
      if (i != id && ele.classList.contains('bg-green-600')) {
        ele.classList.remove('bg-green-600');
        ele.classList.add('bg-green-400');
      }
    }

    setState({...state, year: id});
    // apiCall();
  }

  const launch = id => {
    const element = document.getElementById(id);
    element.classList.remove('bg-green-400');
    element.classList.add('bg-green-600');

    if (id == 'launch-true') {
      const ele = document.getElementById('launch-false');
      if (ele.classList.contains('bg-green-600')) {
        ele.classList.remove('bg-green-600');
        ele.classList.add('bg-green-400');
      }
      setState({...state, launch: 'true' });
    } else {
      const ele2 = document.getElementById('launch-true');
      if (ele2.classList.contains('bg-green-600')) {
        ele2.classList.remove('bg-green-600');
        ele2.classList.add('bg-green-400');
      }
      setState({...state, launch: 'false' });
    }
    // apiCall();
  }

  const land = id => {
    const element = document.getElementById(id);
    element.classList.remove('bg-green-400');
    element.classList.add('bg-green-600');

    if (id == 'land-true') {
      const ele = document.getElementById('land-false');
      if (ele.classList.contains('bg-green-600')) {
        ele.classList.remove('bg-green-600');
        ele.classList.add('bg-green-400');
      }
      setState({...state, land: 'true' });
    } else {
      const ele2 = document.getElementById('land-true');
      if (ele2.classList.contains('bg-green-600')) {
        ele2.classList.remove('bg-green-600');
        ele2.classList.add('bg-green-400');
      }
      setState({...state, land: 'false' });
    }
    // apiCall();
  }

  const clearFilter = () => {
    for(var i = 2006; i < 2021; i++) {
      const ele = document.getElementById(i);
      if (ele.classList.contains('bg-green-600')) {
        ele.classList.remove('bg-green-600');
        ele.classList.add('bg-green-400');
      }
    }
    var ar = [];
    ar[0] = document.getElementById('launch-false');
    ar[1] = document.getElementById('launch-true');
    ar[2] = document.getElementById('land-false');
    ar[3] = document.getElementById('land-true');
    ar.forEach(el => {
      if (el.classList.contains('bg-green-600')) {
        el.classList.remove('bg-green-600');
        el.classList.add('bg-green-400');
      }
    });
    setState({...state, year: null, launch: null, land: null });
  }

  return (
    <div className="App">
      <div className="bg-gray-200 pb-2">
        <h1 className="text-left py-2 mx-6 text-3xl font-bold">SpaceX Launch Programs</h1>
        <div className="flex flex-wrap">
          <FilterCard clearFilter = { clearFilter } yearSelect = { yearSelect } launch = { launch } land = { land } />
          {
            data.map(data => {
              return <ResultCard mission_name = { data.mission_name } key = { data.flight_number } flight_number = { data.flight_number } image = { data.links.mission_patch_small } ids = { data.mission_id } launch_year = { data.launch_year } launch_success = { data.launch_success } land_success = { data.rocket.first_stage.cores[0].land_success } />
            })
          }
        </div>
        <div>
          <span className="font-bold text-2xl">Developed by: </span>
          <span className="text-2xl">Japesh Sikri</span>
        </div>
      </div>
    </div>
  );
}

export default App;
