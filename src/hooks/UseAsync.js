import React, { useState } from 'react';
import { AxiosResponse } from 'axios';

function useAsync(asyncFunction) {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState();

    const wrappedFunction = async (...argv) => {
        try {
            setIsPending(true);
            return await asyncFunction(...argv);
        } catch (err) {
            setError(err);
            return;
        } finally {
            setIsPending(false);
        }
    };

    return [isPending, error, wrappedFunction];
}

export default useAsync;
