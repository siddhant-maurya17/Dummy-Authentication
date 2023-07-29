const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload, error: null };
      case 'LOGIN_ERROR':
        return { ...state, error: action.payload };
      case 'SET_USER_PROFILE':
        return { ...state, user: action.payload, error: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  