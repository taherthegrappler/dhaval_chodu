
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
export default function UserPage() {
  const params = useParams(); // Get dynamic route params
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!params?.id) return;
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/users/${params.id}`, {
          cache: 'no-store', // Ensures fresh data on each request
        });
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [params?.id]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {user?.firstName} {user?.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  );
}