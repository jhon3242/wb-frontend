import React, { useState } from 'react';
import useAsync from "../hooks/UseAsync";
import {momentApi, weightApi} from "../api/Api";
import SeatForm from "./SeatForm";
import BaggageForm from "./BaggageForm";
import FuelForm from "./FuelForm";
import Table from "./Table";

function Container(props) {
    const initState = {
        "basicEmptyWeight": 1657,
        "flightType": "cessna172S",
        "frontSeats": 286,
        "rearSeats": 0,
        "baggage1": 10,
        "baggage2": 0,
        "fuel": 318,
        "fuelStartTaxiRunUp" : -8,
        "estimatedFuelBurn" : -120,
        "rampWeight": null
    };
    const [weightForm, setWeightForm] = useState(initState);
    const [momentForm, setMomentForm] = useState(initState);
    const [isDone, setIsDone] = useState(false);
    const [isLoading1, loadingError1, weightApiAsync] = useAsync(weightApi);
    const [isLoading2, loadingError2, momentApiAsync] = useAsync(momentApi);
    const [currentForm, setCurrentForm] = useState(1);

    const handleValuesChange = (event) => {
        const { name, value } = event.target;
        setWeightForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleNextForm = () => {
        setCurrentForm((prevForm) => prevForm + 1);
    };

    const handlePreviousForm = () => {
        setCurrentForm((prevForm) => prevForm - 1);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentForm === 3) {
            // Call weightApiAsync with the necessary arguments
            const newWeightForm = await weightApiAsync(weightForm);
            setWeightForm(newWeightForm);
            const momentForm = await momentApiAsync(weightForm);
            setMomentForm(momentForm);
            setIsDone(true);
        } else {
            handleNextForm(); // Call handleNextForm to switch to the next form
        }
    };

    const renderForm = () => {
        switch (currentForm) {
            case 1:
                return <SeatForm values={weightForm} handleValuesChange={handleValuesChange} handleSubmit={handleSubmit} />;
            case 2:
                return <BaggageForm values={weightForm} handleValuesChange={handleValuesChange} handleSubmit={handleSubmit} />;
            case 3:
                return <FuelForm values={weightForm} handleValuesChange={handleValuesChange} handleSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <div className="mx-4">

            <div className="container">
                <div className="py-5 text-center">
                    <h2>Weight & Balance</h2>
                </div>
                {!isDone &&  (
                    <div>
                        {renderForm()}
                        <div className="row">
                            <div className="col">
                                {currentForm > 1 && (
                                    <button className="w-100 btn btn-secondary btn-lg" type="button" onClick={handlePreviousForm}>
                                        뒤로
                                    </button>
                                )}
                            </div>
                            <div className="col">
                                <button className="w-100 btn btn-primary btn-lg" type="button" onClick={handleSubmit}>
                                    {currentForm === 3 ? '완료' : '다음'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {isDone && (
                    <Table weight={weightForm} moment={momentForm} />
                )}
            </div>
        </div>
    );
}

export default Container;
