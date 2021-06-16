import React from 'react';

const FilterCard = props => {
    return (
        <div className="w-full md:w-1/3 lg:w-1/6 mx-6 mb-5 bg-gray-50 rounded-md">
            <h2 className="text-xl font-bold text-left ml-5 py-1">Filters</h2>
            <h3 className="pb-1 mb-2 w-2/3 mx-auto object-center border-b-2 border-gray-800">Launch Year</h3>
            <div className="p-3">
                <button id="2006" onClick={() => {props.yearSelect(2006)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2006</button>
                <button id="2007" onClick={() => {props.yearSelect(2007)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2007</button>
            </div>
            <div className="p-3">
                <button id="2008" onClick={() => {props.yearSelect(2008)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2008</button>
                <button id="2009" onClick={() => {props.yearSelect(2009)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2009</button>
            </div>
            <div className="p-3">
                <button id="2010" onClick={() => {props.yearSelect(2010)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2010</button>
                <button id="2011" onClick={() => {props.yearSelect(2011)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2011</button>
            </div>
            <div className="p-3">
                <button id="2012" onClick={() => {props.yearSelect(2012)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2012</button>
                <button id="2013" onClick={() => {props.yearSelect(2013)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2013</button>
            </div>
            <div className="p-3">
                <button id="2014" onClick={() => {props.yearSelect(2014)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2014</button>
                <button id="2015" onClick={() => {props.yearSelect(2015)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2015</button>
            </div>
            <div className="p-3">
                <button id="2016" onClick={() => {props.yearSelect(2016)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2016</button>
                <button id="2017" onClick={() => {props.yearSelect(2017)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2017</button>
            </div>
            <div className="p-3">
                <button id="2018" onClick={() => {props.yearSelect(2018)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2018</button>
                <button id="2019" onClick={() => {props.yearSelect(2019)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2019</button>
            </div>
            <div className="p-3">
                <button id="2020" onClick={() => {props.yearSelect(2020)}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">2020</button>
            </div>
            <h3 className="pt-3 pb-1 mb-2 w-2/3 mx-auto object-center border-b-2 border-gray-800">Successful Launch</h3>
            <div className="p-3">
                <button id="launch-true" onClick={() => {props.launch('launch-true')}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">True</button>
                <button id="launch-false" onClick={() => {props.launch('launch-false')}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">False</button>
            </div>
            <h3 className="pt-3 pb-1 mb-2 w-2/3 mx-auto object-center border-b-2 border-gray-800">Successful Landing</h3>
            <div className="p-3">
                <button id="land-true" onClick={() => {props.land('land-true')}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">True</button>
                <button id="land-false" onClick={() => {props.land('land-false')}} className="m-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">False</button>
            </div>
            <div className="p-3">
                <button id="land-false" onClick={props.clearFilter} className="m-1 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reset All Filters</button>
            </div>
        </div>
    )
}

export default FilterCard;