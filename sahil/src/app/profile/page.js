'use client';

import { useSearchParams } from 'next/navigation';

const Profile = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email'); // Get email from URL

  return (
    <div className='index'>
      <h2>User Profile</h2>
      {email ? <p>Email: {email}</p> : <p>No email provided</p>}
    </div>
  );
};

export default Profile;
