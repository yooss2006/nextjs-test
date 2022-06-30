export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시물",
      Images: [
        {
          src: "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1656447553291-377b34781c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1648737966326-eb0770cec304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        },
      ],
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
    nickname: "제로초3",
  },
  content: "두 번째 게시물",
  Images: [
    {
      src: "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1656447553291-377b34781c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1648737966326-eb0770cec304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
  ],
  Comments: [
    {
      User: {
        nickname: "neroㅎㄹㅎ",
      },
      content: "하이ㅇㄴㅁㅇ",
    },
    {
      User: {
        nickname: "hohoㅊㄴㅁ",
      },
      content: "하이ㅇㅁㄴ2",
    },
  ],
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
