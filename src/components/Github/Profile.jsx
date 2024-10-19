import React, { useEffect, useState } from 'react'

const Profile = () => {

    const [Data ,setData] = useState({});
    
    useEffect(()=>{
      const fetchData = async () => {
        try {
            const response = await fetch('https://api.github.com/users/satyamrai553');
            const resData = await response.json();
            setData(resData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Call the async function
    fetchData();
    },[])

  return (
    <div className='bg-background-color' >
    {console.log(Data)}
    <h1>{Data.login}</h1>
    <img src={Data.avatar_url} className=" border-4 border-dashed border-neutral-200"alt="" />
    </div>
  )
}

export default Profile