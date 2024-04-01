import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartOptions } from '../../../lib/data/data';
import useFetch from '../../../lib/hooks/useFetch';


const Graph = () => {
    const { data: chartData, error, loading } = useFetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population', 'Graph Component');
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const labels = chartData && chartData.data.map((item) => item.Nation);

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: chartData && chartData.data.map((item) => item.Population),
                borderColor: 'green',
                backgroundColor: 'rgba(255, 255, 255, 1)',
            },
        ],
    };
    return (
        <div className="graph">
            <div className="container">
                <Line data={data} options={chartOptions} />
            </div>
        </div>
    );
};

export default Graph;