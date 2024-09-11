import React, {useEffect} from 'react'
import { getCurrentConditions } from '../../api/weather';

const Profile = ({user}) => {
  let signedInUser
  if(user) {
    signedInUser = user.user;
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCurrentConditions(signedInUser);
        console.log(data)
      } catch(error) {
        console.log(error)
      }
    }
    //fetchData()
  },[])

  return (
    <div id='profile' className='container'>
      <h2>Current conditions for Los Angeles, CA</h2>
      <div>
        <p>Temp: 75 Degres</p>
        <p>Sunny</p>
        <p>0% Chance of Rain</p>
      </div>
    </div>
  )
}

export default Profile