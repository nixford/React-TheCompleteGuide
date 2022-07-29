import ChartBar from '../CharBar/CharBar';
import './Char.css';

const Char = (props) => {
  return (
    <div className='chart'>
      {props.dataPoints.map((dp) =>
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={null}
          label={dp.label}
        />)}
    </div>
  )
}

export default Char;