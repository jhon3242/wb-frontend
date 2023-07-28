import React from 'react';

const BaggageForm = ({values, handleValuesChange, handleSubmit}) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="baggage1" className="float-start">Baggage 1</label>
                <input
                    id="baggage1"
                    name="baggage1"
                    className="form-control mb-3"
                    value={values.baggage1}
                    onChange={handleValuesChange}
                    type="number"
                />
            </div>
            <div>
                <label htmlFor="baggage2" className="float-start">Baggage 2</label>
                <input
                    id="baggage2"
                    name="baggage2"
                    className="form-control mb-3"
                    value={values.baggage2}
                    onChange={handleValuesChange}
                    type="number"
                />
            </div>

        </>
    );
};

export default BaggageForm;
