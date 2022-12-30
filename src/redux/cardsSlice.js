import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: [
    {
      id: 1,
      title: "Clean the house",
      detail: "Kitchen, Bathroom and Living Room",
      completed: false,
    },
    {
      id: 2,
      title: "Buy groceries",
      detail: "Milk, eggs, butter, sausages, onions, potatoes, bacon, bread",
      completed: false,
    },
    {
      id: 3,
      title: "Read a book about TypeScript",
      detail: "Read this book, and build an app with TypeScript",
      completed: false,
    },
    {
      id: 4,
      title: "Cook Dinner",
      detail: "Baked Salmon with mashed potatoes",
      completed: false,
    },
  ],
  reducers: {
    addCard: (state, action) => {
      // you need to add object to the state. state we have as an array of objects
      const newCard = {
        id: Date.now(),
        title: action.payload.title,
        detail: action.payload.detail,
        completed: false,
      };
      state.push(newCard);
    },
    markCompleted: (state, action) => {
      // findIndex - indexOf here didn't work
      const index = state.findIndex((card) => card.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteCard: (state, action) => {
      const index = state.findIndex((card) => card.id === action.payload.id);
      state.splice(index, 1);
    },
    editCard: (state, action) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      state[index].title = action.payload.title
      state[index].detail = action.payload.detail
    },
  },
});

export const { addCard, markCompleted, deleteCard, editCard } = cardsSlice.actions;

export default cardsSlice.reducer;
