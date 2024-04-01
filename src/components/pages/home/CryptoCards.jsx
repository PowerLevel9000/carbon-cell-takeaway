import React, { Suspense } from 'react'
import useFetch from '../../../lib/hooks/useFetch';

const CryptoCards = () => {
    const { data, error, loading } = useFetch('https://api.coindesk.com/v1/bpi/currentprice.json', 'CryptoCards Component');
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }
    return (
        <div className='card-container'> 
            {
                data && data.bpi && Object.keys(data.bpi).map((key, index) => (
                    <div key={index} className="card">
                        <div className="card-header">
                            <h1>{data.bpi[key].description}</h1>
                        </div>
                        <div className="card-body">
                            <h2>{data.bpi[key].code}</h2>
                            <div className="list">
                                <i className='fa fa-info-circle'>
                                </i>
                                <p>{data.bpi[key].rate}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CryptoCards