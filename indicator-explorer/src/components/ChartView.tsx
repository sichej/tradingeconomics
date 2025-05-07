import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, TimeScale, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { HistoricalDataPoint } from '../types';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, TimeScale);

type Props = {
  data: HistoricalDataPoint[];
};

export const ChartView = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: 'Value',
        data: data.map((d) => d.value),
        fill: false,
        borderColor: 'black',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};
