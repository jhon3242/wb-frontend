import React from 'react';

const Table = ({ weight, moment }) => {
    console.log("weight = ", weight);
    console.log("moment = ", moment);

    const keyDit = {
        "basicEmptyWeight": "Basic Empty Weight",
        "flightType": "Flight Type",
        "frontSeats": "Front Seats",
        "rearSeats": "Rear Seats",
        "baggage1": "Baggage 1",
        "baggage2": "Baggage 2",
        "fuel": "Fuel",
        "fuelStartTaxiRunUp" : "Fuel Start, Taxi and Run-up",
        "estimatedFuelBurn" : "Estimated Fuel Burn",
        "rampWeight": "Ramp Weight"
    }

    return (
        <table className="table table-striped table">
            <thead>
            <tr>
                <th>Items</th>
                <th>Weight(lbs)</th>
                <th>CG</th>
                <th>Moment(lbs-in)</th>
            </tr>
            </thead>
            <tbody>
            {Object.entries(weight).map(([key, value]) => (
                <tr key={key}>
                    <td>{keyDit[key]}</td>
                    <td>{value}</td>
                    <td>{Math.round((moment[key] * 100 / value))/100 || 0}</td>
                    <td>{moment[key]}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
