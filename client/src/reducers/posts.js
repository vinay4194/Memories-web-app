export default (posts = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		case "FETCH_POST":
			return action.payload;
		case "CREATE":
			return [...posts, action.payload];
		case "UPDATE":
		case "LIKE":
			return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
		case "DELETE":
			return posts.filter((post) => post._id !== action.payload);

		default:
			return posts;
	}
};

// export default (state = [], action) => {
// 	switch (action.type) {
// 		case "FETCH_ALL":
// 			return { ...state, posts: action.payload.data };
// 		case "FETCH_POST":
// 			return { ...state, post: action.payload };
// 		case "CREATE":
// 			return { ...state, posts: [...state.posts, action.payload] };
// 		case "UPDATE":
// 		case "LIKE":
// 			return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
// 		case "DELETE":
// 			return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };

// 		default:
// 			return state;
// 	}
// };
