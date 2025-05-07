import { Indicator, HistoricalDataPoint } from '../types';

const BASE_URL = 'https://api.tradingeconomics.com';
const API_KEY = '<api_key>';

export async function fetchIndicators(country: string): Promise<Indicator[]> {
  const url = `${BASE_URL}/country/${encodeURIComponent(country)}?c=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) 
    throw new Error(`Failed to fetch indicators: ${res.status}`);

  const data = await res.json();

  return data.map((item: any) => ({
    title: item.Category,
    category: item.CategoryGroup,
    country: item.Country,
    historicalDataSymbol: item.Symbol,
  }));
}

export async function fetchHistoricalData(country: string, symbol: string): Promise<HistoricalDataPoint[]> {
  const url = `${BASE_URL}/historical/country/${country}/indicator/${encodeURIComponent(symbol)}?c=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) 
    throw new Error(`Failed to fetch historical data: ${res.status}`);

  const data = await res.json();

  return data.map((item: any) => ({
    date: item.DateTime,
    value: item.Value,
  }));
}
