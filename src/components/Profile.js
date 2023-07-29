import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../redux/authActions';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userId } = useParams();

  useEffect(() => {
    if (userId && user && userId === user.id) {
      return;
    }

    const fetchUserProfile = async () => {
      const userProfile = await dispatch(getUserProfile(userId));
      if (userProfile) {
        // You can dispatch an action here to store the profile data in Redux state if needed.
      }
    };

    fetchUserProfile();
  }, [dispatch, userId, user]);

  return (
    <div className='profile'>
      <div><p>Welcome to Your Profile!👋</p></div> 
      <h2>Profile</h2>
      {user ? (
        <div>
          <div className='image'> <img src={user.image}/></div>
          <p><b>Username:</b>{user.username}</p>
          <p><b>Email: </b>{user.email}</p>
          <p><b>FirstName: </b>{user.firstName}</p>
          <p><b>LastName: </b>{user.lastName}</p>
          <p><b>Gender: </b>{user.gender}</p>
          {/* Display other user details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
