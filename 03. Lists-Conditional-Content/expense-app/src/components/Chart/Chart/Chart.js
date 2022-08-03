import ChartBar from '../CharBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoints => dataPoints.value);
  const totalMaximum = Math.max(...dataPointValues);


  return (
    <div className='chart'>
      {props.dataPoints.map((dp) =>
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={totalMaximum}
          label={dp.label}
        />)}
    </div>
  )
}

export default Chart;