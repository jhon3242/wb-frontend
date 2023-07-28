import React from 'react';

const FuelForm = ({values, handleValuesChange, handleSubmit}) => {
    return (
        <>
            <div>
                <label htmlFor="fuel" className="float-start">Fuel</label>
                <input
                    id="fuel"
                    name="fuel"
                    className="form-control mb-3"
                    value={values.fuel}
                    onChange={handleValuesChange}
                    type="number"
                />
            </div>
            <div>
                <label htmlFor="fuelStartTaxiRunUp" className="float-start">Fuel Start, Taxi and Run-up</label>
                <input
                    id="fuelStartTaxiRunUp"
                    name="fuelStartTaxiRunUp"
                    className="form-control mb-3"
                    value={values.fuelStartTaxiRunUp}
                    onChange={handleValuesChange}
                    type="number"
                />
            </div>
            <div>
                <label htmlFor="estimatedFuelBurn" className="float-start">Estimated Fuel Burn</label>
                <input
                    id="estimatedFuelBurn"
                    name="estimatedFuelBurn"
                    className="form-control mb-3"
                    value={values.estimatedFuelBurn}
                    onChange={handleValuesChange}
                    type="number"
                />
            </div>
        </>
    );
};

export default FuelForm;
