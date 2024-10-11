import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Legend
} from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre) => {
            const filteredEvents = events.filter(event => event.summary.includes(genre));
            return {
                name: genre,
                value: filteredEvents.length
            };
        });
        return data;
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#ae091f"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} - ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };

    return (
        <div>
            <h4 className='chart-title'>Topic Popularity</h4>
            <ResponsiveContainer width='99%' height={350}>
            <PieChart>
                <Pie
                dataKey='value'
                data={data}
                fill='#40748c'
                label={renderCustomizedLabel}
                labelLine={false}
                outerRadius={150}
            />
            </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default EventGenresChart;