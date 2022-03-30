const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
        
      };
    }
    case "feed/postsFetched": {
      return {
        loading: false,

        posts: [...state.posts, ...action.payload], //First we will copy the posts in the state, then add the new ones.
      };
    }
    default: {
      return state;
    }
  }
}
