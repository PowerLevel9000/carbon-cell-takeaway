import React from 'react'
import useFetch from '../../../lib/hooks/useFetch';

const Graph = () => {
    const { data, error, loading } = useFetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population', 'Graph Component');
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Graph