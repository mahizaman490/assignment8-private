import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

const Statistics = () => {

    const [giveDonation, setGiveDonation] = useState(0);

    useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem('donation'));
        if (storedItem !== null) {
            setGiveDonation(storedItem.length);
        }
    }, [])

    const data = [
        { label: 'My Donation', value: giveDonation, color: '#00C49F' },
        { label: 'Total Donation', value: 12 - giveDonation, color: 'red' },
    ];

    const sizing = {
        margin: { right: 10 },
        width: 500,
        height: 500
    };

    const totalDonation = 12;

    const getDonation = (params) => {
        const percent = params.value / totalDonation;
        return `${(percent * 100).toFixed(1)}%`;
    };


    return (

<div className='flex items-center justify-center'>


<PieChart
            series={[
                {
                    outerRadius: 150,
                    data,
                    arcLabel: getDonation,
                },
            ]}
            legend={{
                direction: "col",
                position: {
                    vertical: "middle",
                    horizontal: "middle"
                }
            }}
            sx={{
                "--ChartsLegend-rootOffsetX": "0px",
                "--ChartsLegend-rootOffsetY": "200px",
            }}
            {...sizing}
        />
</div>

    )
};

export default Statistics;
