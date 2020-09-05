// Author: Cory House
// Article: Four Ways to Fetch Data in React
// Source URL: https://www.bitnative.com/2020/07/06/four-ways-to-fetch-data-in-react/
// Date : August 26th, 2020

import { useEffect, useState, useRef } from 'react';

const useFetch = (url, init) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const prevInit = useRef();
    const prevUrl = useRef();

    useEffect(() => {
        if (prevUrl.current === url
            && prevInit.current === init) {
            return;
        }

        fetch(url, init)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                setError(response);
            })
            .then(data => setData(data))
            .catch(err => {
                console.error(err);
                setError(err);
            })
            .finally(() => setLoading(false));
    }, [init, url]);

    return { data, loading, error };
};

export default useFetch;
