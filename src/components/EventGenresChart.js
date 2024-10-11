import React from 'react';
import { useEffect, useState } from 'react';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
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
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} - ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };

      const colors = ['#252627', '#40748c', '#ae091f', '#b6d6cc', '#e9c46a'];

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
            >
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                }
            </Pie>
            </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default EventGenresChart;