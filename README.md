# Trading With AlgoTest

This project is a trading platform interface built using **Next.js** with **React** and **Zustand** for state management. It connects to a WebSocket to fetch live prices for option chains and updates the interface in real-time. The app allows users to view options data like strike prices, call and put prices, and filter the data based on contract expiry.

## Features

- **Contract Data Fetching:** Retrieves contract and option chain data from the backend API.
- **WebSocket Integration:** Receives live market data (like Last Traded Price) and updates the displayed prices in real time.
- **Contract Selection:** Users can choose different contracts to view the related options data.
- **Expiry Date Filtering:** Filters data by contract expiry.
- **Responsive Design:** Adapts the layout based on screen size.

## Tech Stack

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: Frontend JavaScript library for building user interfaces.
- **Zustand**: State management library for handling the application's global state.
- **WebSockets**: To stream live updates from the backend server.
- **Tailwind CSS**: For styling the components.
- **TypeScript**: Type-checking and providing a structured development process.

## Components Overview

### 1. `Layout.tsx`
Defines the overall page layout with a header and dynamic child components. The page's metadata includes the title and description.

### 2. `OptionChainTable.tsx`
This is the main component that fetches and displays the options data. It:
- Fetches contract and option chain data using the provided API endpoints.
- Opens a WebSocket connection to receive live updates on Last Traded Price (LTP).
- Handles contract selection and expiry date filtering.

### 3. `ContractList.tsx`
Displays a dropdown for contract selection. Allows users to pick different contracts, which then updates the `OptionChainTable`.

### 4. `ExpiryDateFilter.tsx`
Provides buttons for filtering options data by expiry dates. Updates the selected expiry date in the store.

### 5. `TableData.tsx`
Displays the option chain data, including strike prices, call prices, and put prices for the selected contract and expiry.

### 6. `Spinner.tsx`
Shows a loading spinner while data is being fetched from the API.

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/trading-with-algotest.git
cd trading-with-algotest
```
###  2. Install Dependencies

```bash
npm install
```
### 3. Start the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 in your browser to view the app.

##  API Integration
- The project fetches contract and option chain data using fetchContractsData and fetchOptionChainData from @/api/apiRequest.
- WebSocket connection streams live Last Traded Price (LTP) from wss://prices.algotest.xyz/mock/updates.

## WebSocket Integration
The WebSocket is used to listen for live updates on the selected contract and expiry. Once connected, it listens for updates, and any incoming LTP data is applied directly to the table rows.

### WebSocket Flow
- The WebSocket connection opens when a contract and expiry are selected.
- A subscription message is sent to the server to request LTP data.
- Upon receiving LTP data, the relevant DOM elements are updated in real time.

## State Management
The project uses Zustand for managing the global state, which includes:
- contractData: Stores the contract details fetched from the API.
- optionChainData: Stores option chain data for a selected contract and expiry.
- selectedContractItem: Keeps track of the currently selected contract.
- selectedExpiry: Stores the selected expiry date for filtering options.

## Project Structure
The project is structured into the following folders:
src
├── api
│   └── apiRequest.tsx
├── app
│   ├── components
│   │   ├── ContractList.tsx
│   │   ├── ExpiryDateFilter.tsx
│   │   ├── Header.tsx
│   │   ├── OptionChainTable.tsx
│   │   ├── Spinner.tsx
│   │   └── TableData.tsx
│   ├── types
│   │   └── types.ts
│   ├── utils
│   │   └── store.ts
│   ├── layout.tsx
│   └── page.tsx

### Folder Description
#### api: 
Contains the API request logic to fetch data from the server.

- **apiRequest.tsx**: This file contains functions to fetch contracts and option chain data.

#### app: 
The main application folder containing all components, types, and utilities.

#### components: 
Contains reusable components used across the application.

**ContractList.tsx**: A dropdown component for selecting contracts.
**ExpiryDateFilter.tsx**: A button component for filtering options based on expiry dates.
**Header.tsx**: A header component for website.
**OptionChainTable.tsx**: The main component that renders the option chain table and handles data fetching and WebSocket connections.
**Spinner.tsx**: A loading spinner component displayed while data is being fetched.
**TableData.tsx**: Renders individual rows of the option chain table, displaying call and put prices for each strike.

#### types: 
Contains TypeScript type definitions for better type safety.

**types.ts**: Defines various types used in the application, including contract and option chain data structures.

#### utils: 
Contains utility functions and state management.

**store.ts**: Contains Zustand store for global state management, including contract data and selected items.

#### layout.tsx: 
The layout component for the application, defining the layout structure of the app. 

#### page.tsx: 
The entry point of the application that renders the main content.

## Integrated Jest for Testing.
To run test cases, you can use command:

```bash
    npm run test filename
```
