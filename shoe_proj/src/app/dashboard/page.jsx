// components/Dashboard.js
"use client"
import { useEffect, useState } from 'react';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:4000/protected',{
            credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{userData.message}</p>
    </div>
  );
}

export default Dashboard;
