export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시물",
      Image: [{}],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "하이",
        },
        {
          User: {
            nickname: "hoho",
          },
          content: "하이2",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 2,
    nickname: "똥구",
  },
  content: "첫 번째 게시물",
  Image: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
