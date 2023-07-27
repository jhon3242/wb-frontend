import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import useAsync from "../hooks/UseAsync";
import {weightApi} from "../api/Api";

function Container(props) {
    const initState = {
        "basicEmptyWeight": 1657,
        "flightType": "cessna172S",
        "frontSeats": 286,
        "rearSeats": 0,
        "baggage1": 10,
        "baggage2": 0,
        "fuel": 318,
        "rampWeight": null
    };
    const [values, setValues] = useState(initState);
    const [isLoading, loadingError, weightApiAsync] = useAsync(weightApi);

    const handleValuesChange = (event) => {
        const { name, value } = event.target;
        setValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call weightApiAsync with the necessary arguments if needed
        const response = await weightApiAsync(values); // You can pass arguments like weightApiAsync(arg1, arg2, ...)
        // Handle the response as needed
        console.log(response);
    };

    return (
        <div className="mx-4">
            <div className="container">
                <div className="py-5 text-center">
                    <h2>Sign in</h2>
                </div>
                <h4 className="mb-3">로그인 정보 입력</h4>
                <div className="py-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="frontSeats" className="float-start">Front Seats</label>
                            <input
                                id="frontSeats"
                                name="frontSeats"
                                className="form-control"
                                value={values.frontSeats}
                                onChange={handleValuesChange}
                                type="number"
                            />
                        </div>
                        <div>
                            <label htmlFor="rearSeats" className="float-start">Rear Seats</label>
                            <input
                                id="rearSeats"
                                name="rearSeats"
                                className="form-control"
                                value={values.rearSeats}
                                onChange={handleValuesChange}
                                type="number"
                            />
                        </div>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col">
                                <button className="w-100 btn btn-secondary btn-lg" type="button">
                                    뒤로
                                </button>
                            </div>
                            <div className="col">
                                <button className="w-100 btn btn-primary btn-lg" type="submit">다음</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Container;
