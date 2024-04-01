import React, { Suspense } from 'react'
import useFetch from '../../../lib/hooks/useFetch';

const CryptoCards = () => {
    const { data, error, loading } = useFetch('https://api.coindesk.com/v1/bpi/currentprice.json', 'CryptoCards Component');
    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default CryptoCards