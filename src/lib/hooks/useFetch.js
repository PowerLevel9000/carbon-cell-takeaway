import { useEffect, useState, useCallback } from "react";

const useFetch = (url, component = 'this Component') => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`
                    An error occurred while fetching the data of ${component}.
                    Status: ${response.status}
                    Status Text: ${response.status === 404 ? "Data Not Found" : response.statusText}
                `);
            }
            const data = await response.json();
            setData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url, component]);

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading };
}

export default useFetch;
