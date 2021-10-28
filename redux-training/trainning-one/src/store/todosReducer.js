let id = 1;
const categories = ["home", "work"];

const initialeState = [
  {
    id: 1,
    action: String,
    completed: false,
    error: null,
    categories: categories,
    category: categories[0]
  },
];

export const ADD_A_ACTION = "ADD_A_ACTION";

export function todosReducer(state = initialeState, action) {
  switch (action.type) {
    case ADD_A_ACTION:
      return [...state, { id: ++id, action: "clean grown", completed: false }];
    default:
      return state;
  }
}
