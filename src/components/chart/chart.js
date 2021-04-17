import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const Chart = (props) => {
    const { emptyChart, data, label } = props
    
    if (emptyChart) {
        return (
            <LineChart width={500} height={300}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label={{ value: 'NO DATA', offset: 20, position: 'top' }} />
                <YAxis />
            </LineChart>
        )
    } else {
        
        return (
            <>
            <span style={{marginLeft: '45%'}}>{label}</span>
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis />
                <Tooltip />
                <Legend iconType="square" />
                <Line type="monotone" name="FCP" dataKey="fcp" stroke="#bf1b1b" />
                <Line type="monotone" name="TTFB" dataKey="ttfb" stroke="#11910f" />
                <Line type="monotone" name="Dom Load" dataKey="domLoad" stroke="#0f3d7d" />
                <Line type="monotone" name="Window Load" dataKey="windowLoad" stroke="#9c18c4" />
            </LineChart>
            </>
        )
    }
}

export default Chart