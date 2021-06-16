import React from 'react';

const ResultCard = props => {
    const ids = () => {
        if (props.ids[0] === undefined) {
            return <ul>N/A</ul>
        }
    }

    const land = e => {
        if (e === null) {
            return <span>null</span>
        } else {
            return <span>{e.toString()}</span>
        }
    }

    return (
        <div className="w-full md:w-1/3 lg:w-1/6 mx-6 mb-5 bg-gray-50 rounded-md">
            <div className="p-5">
                <img className="mx-auto w-full bg-gray-200" src={props.image}></img>
            </div>
            <div className="px-5 text-left">
                <h2 className="pb-3 text-xl font-bold text-blue-700">{props.mission_name} #{props.flight_number}</h2>
                <h3 className="font-bold">Mission Ids:</h3>
                <ul>{props.ids[0]}</ul>
                <ul>{props.ids[1]}</ul>
                { ids() }
                <h3 className="py-1">
                    <span className="font-bold">Launch Year: </span>
                    <span>{props.launch_year}</span>
                </h3>
                <h3 className="py-1 ">
                    <span className="font-bold">Successful Launch: </span>
                    {land(props.launch_success)}
                </h3>
                <h3 className="pt-1 pb-5">
                    <span className="font-bold">Successful Landing: </span>
                    {land(props.land_success)}
                </h3>
            </div>
        </div>
    )
}

export default ResultCard;