import React,{useState, useEffect, useRef} from 'react';
import {usePage} from '@inertiajs/inertia-react';
import Layout from '../../layouts/Layout';

function UserPage() {
  const [users, setUsers] = useState();
  
  const data = usePage().props;

  useEffect(() => {
    setUsers(data.users);
  },[]);

  console.clear();
  console.log(users);

  return (
    <div>
      <Layout>
          <div className="header">
              <h1 className="header-text">Users</h1>
              <h6>List of users</h6>
          </div>
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                Hai test
              </div>
          </div>
      </Layout>
    </div>
  )
}

export default UserPage
