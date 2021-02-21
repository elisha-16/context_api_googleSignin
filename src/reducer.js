export const initialState = {
    user: null,
    age: 0
  };


  export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case "SET_USER":
        return {
          ...state,
          user: action.user
        }
        
        case "SET_AGE":
          return {
            ...state,
            age: state.age+action.age
          }
      default:
            return state;
    
    }

}