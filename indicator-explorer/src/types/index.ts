export interface Indicator {
    title: string;
    category: string;
    country: string;
    historicalDataSymbol: string;
  }
  
  export interface HistoricalDataPoint {
    date: string;
    value: number;
  }
  