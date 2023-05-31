import React, { useState } from 'react';

const motorcyclesData = [
  { id: 1, brand: 'Honda', model: 'CBR600RR', year: 2022 },
  { id: 2, brand: 'Kawasaki', model: 'Ninja 650', year: 2021 },
  { id: 3, brand: 'Yamaha', model: 'YZF-R6', year: 2020 },
  { id: 4, brand: 'Suzuki', model: 'GSX-R750', year: 2023 },
  { id: 5, brand: 'Ducati', model: 'Panigale V4', year: 2022 }
];

const MotorcycleList = ({ motorcycles }) => {
  return (
    <div>
      <h1>Motorcycle List</h1>
      <ul>
        {motorcycles.map(motorcycle => (
          <li key={motorcycle.id}>
            <strong>{motorcycle.brand}</strong> - {motorcycle.model} ({motorcycle.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchBar = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Search Bar</h2>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search motorcycles..." />
    </div>
  );
};

const App = () => {
  const [filter, setFilter] = useState('');
  const filteredMotorcycles = motorcyclesData.filter(motorcycle =>
    motorcycle.brand.toLowerCase().includes(filter.toLowerCase()) ||
    motorcycle.model.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <SearchBar filter={filter} setFilter={setFilter} />
      <MotorcycleList motorcycles={filteredMotorcycles} />
    </div>
  );
};

export default App;