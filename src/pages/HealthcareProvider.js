import React , { useState, useEffect }from 'react';
import {
    useNavigate,
  } from 'react-router-dom';

const HealthcareProvider = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleRowClick = (row) => {
        navigate('/');
    }
    
    useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async () => {
          try {
            // const response = await axios.get('https://api.example.com/data');
            const patientsData = [
                { id: 1, name: 'John Doe', age: 28, steps:'1000', activeTime: '6h' , sleep: '8 hours', city: 'New York' },
                { id: 2, name: 'Jane Smith', age: 34,  steps:'1000', activeTime: '6h' , sleep: '8 hours', city: 'Los Angeles' },
                { id: 3, name: 'Sam Johnson', age: 45,  steps:'1000', activeTime: '6h' , sleep: '8 hours', city: 'Chicago' },
              ];
            setData(patientsData);
          } catch (err) {
            setError(err);
          }
        };
    
        // Call the function
        fetchData();
      }, []); // Empty dependency array means this effect runs once after the initial render
      
      if (error) return <p>Error: {error.message}</p>;
    
      return (
        <div className='provider-container'><h3>Healthcare Provider</h3>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Steps</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Active Time</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Sleep</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} onClick={() => handleRowClick(item)}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.age}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.steps}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.activeTime}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.sleep}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default HealthcareProvider;