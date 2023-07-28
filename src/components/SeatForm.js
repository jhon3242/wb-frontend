import React from 'react';

const SeatForm = ({ values, handleValuesChange, handleSubmit }) => {
    return (
        <div className="py-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="frontSeats" className="float-start">Front Seats</label>
                    <input
                        id="frontSeats"
                        name="frontSeats"
                        className="form-control mb-3"
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
                        className="form-control mb-3"
                        value={values.rearSeats}
                        onChange={handleValuesChange}
                        type="number"
                    />
                </div>
            </form>
        </div>
    );
};

export default SeatForm;
