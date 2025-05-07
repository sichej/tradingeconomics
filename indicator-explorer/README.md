# Indicator Explorer

A simple React + TypeScript application built for the [Trading Economics](https://tradingeconomics.com/).

This application allows users to:

- Select a country (limited to free-tier API access)
- Browse economic indicators available for that country
- View historical time series data in a line chart using Chart.js


## Tech Stack

- React + TypeScript (via Create React App)
- Chart.js + react-chartjs-2
- Jest + @testing-library/react


## Local Setup Instructions

Run the project locally:

### Clone the Repo

```bash
git clone https://github.com/sichej/tradingeconomics.git
cd tradingeconomics/indicator-explorer
```

### Install Dependencies

```bash
npm i
```

### Add Your API Key
inside src/services/tradingEconomicsAPI.ts add API key

### Start
```bash
npm start
```

## Testing

Tests are included for:
- CountrySelect
- IndicatorSelect

To run tests:

```bash
npm test
```