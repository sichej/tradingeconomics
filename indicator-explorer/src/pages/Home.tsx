import { useEffect, useState } from 'react';
import { ChartView } from '../components/ChartView';
import { CountrySelect } from '../components/CountrySelect';
import { IndicatorSelect } from '../components/IndicatorSelect';
import { fetchHistoricalData, fetchIndicators } from '../services/tradingEconomicsAPI';
import { HistoricalDataPoint, Indicator } from '../types';

export const Home = () => {
  const [country, setCountry] = useState('');
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [chartData, setChartData] = useState<HistoricalDataPoint[]>([]);

  // Fetch indicators when country changes
  useEffect(() => {
    if (!country) return;

    fetchIndicators(country)
      .then((data) => setIndicators(data))
      .catch((err) => console.error('Failed to fetch indicators', err));
  }, [country]);

  // Fetch chart data when indicator changes
  useEffect(() => {
    if (!selectedSymbol) return;

    fetchHistoricalData(country, selectedSymbol)
      .then((data) => setChartData(data))
      .catch((err) => console.error('Failed to fetch chart data', err));
  }, [selectedSymbol]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Trading Economics Indicator Explorer</h1>
      
      <CountrySelect value={country} onChange={setCountry} />

      {indicators.length > 0 && (
        <IndicatorSelect
          indicators={indicators}
          value={selectedSymbol}
          onChange={setSelectedSymbol}
        />
      )}

      {chartData.length > 0 && <ChartView data={chartData} />}
    </div>
  );
};
