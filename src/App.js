import React, { useEffect, useState } from 'react';
import supabase from './supabaseClient';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data: items, error } = await supabase
        .from('items')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(items);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>MONEY-MIRU</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
