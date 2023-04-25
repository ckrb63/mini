import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feeds: [
    {
      id: 1,
      title: "한 권으로 읽는 컴퓨터 구조와 프로그래밍",
      reader: "김형래",
      content:
        "이 책은 컴퓨터 공학에 대한 전반을 담고 있다. 절대 얇지 않은 두께의 책이지만 컴퓨터 공학에 대해 거시적으로 다루는 느낌을 받았다. 역사를 잘 알고 있으려면 흐름을 봐야 한다는 말을 어릴 때 들은 적이 있는데, 이 책이 마치 그...",
      rating: 5,
      comment: 2,
      heart: 10,
      img: "https://image.yes24.com/goods/98997716/XL"
    },
    {
      id: 2,
      title: "한 권으로 읽는 컴퓨터 구조와 프로그래밍",
      reader: "김형래",
      content:
        "이 책은 컴퓨터 공학에 대한 전반을 담고 있다. 절대 얇지 않은 두께의 책이지만 컴퓨터 공학에 대해 거시적으로 다루는 느낌을 받았다. 역사를 잘 알고 있으려면 흐름을 봐야 한다는 말을 어릴 때 들은 적이 있는데, 이 책이 마치 그...",
      rating: 5,
      comment: 2,
      heart: 10,
      img: "https://image.yes24.com/goods/98997716/XL"
    }
  ],
  users: [
    {
      name: "김찬규",
      id: "cksr1@naver.com",
      pw: "qwer1234"
    }
  ],
  currentId: 3
  // isSignIn: false,
};

const slice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setUser(state, action) {
      state.users = action.payload;
    },
    postReview(state, action) {
      return {
        users: state.users,
        feeds: [
          ...state.feeds,
          {
            ...action.payload,
            id: state.currentId
          }
        ],
        currentId: state.currentId + 1
        // isSignIn: state.isSignIn
      };
    },
    signup(state, action) {
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload.name,
            id: action.payload.id,
            pw: action.payload.pw
          }
        ]
      };
    }
    // login(state, action) {
    //   const user = state.users.find(
    //     (user) => user.id === action.payload.email
    //   );
    //   if(user && action.payload.password === user.pw){
    //     state.isSignIn = true;
    //   }
    // }
  }
});

export const sliceActions = slice.actions;
export default slice.reducer;
