import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data, title, dataKey, grid }) => {
  return (
    <div className='chart'>
      <h3 className="chartTitle">{ title }</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart
          data={ data }
        >
          { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='3 3' /> }
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={ dataKey } stroke='#5550bd' />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;