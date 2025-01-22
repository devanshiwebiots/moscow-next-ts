import { ToDoProp, ToDoSliceProp } from "@/Types/ToDoType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ToDoSliceProp = {
  showSideBar: false,
  todoList: [],
  task: "",
  addtask:false
};


export const fetchTodoApiData = createAsyncThunk<ToDoProp[], void, {}>("/api/todo", async () => {
  const response = await axios.get("/api/todoapi");
  return response.data;
});

const ToDoSlice = createSlice({
  name: "ToDoSlice",
  initialState,
  reducers: {
    setShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    addtaskShow: (state) => {
      state.addtask = !state.addtask;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    addNewTodo: (state, action) => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const currentDate = new Date();
      const temp = {
        id: state.todoList.length + 1,
        title: action.payload,
        status: "pending",
        badge: "pending",
        badgeClass: "bg-light-danger text-danger",
        timeLimit: currentDate.getDate() + " " + months[currentDate.getMonth()],
      };
      state.todoList = [temp,...state.todoList];
    },
    removeItems: (state, action) => {
      state.todoList = state.todoList?.filter((data) => data.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const {id,status,badgeClass}=action.payload
      const temp = state.todoList.map(item => {
        if (item.id === id) {
          if (status === 'pending') {
            return { ...item, status, badgeClass: badgeClass, badge: 'pending' };
          } else if (status === 'completed') {
            return { ...item, status, badgeClass: badgeClass, badge: 'Done' };
          }
        }
        return item;
      });
      state.todoList = temp
    },    
    markTaskAsCompleted: (state, action) => {
      state.todoList = state.todoList.map((item: ToDoProp) => {
          if (item.id === action.payload) {
              const newStatus = item.status === 'pending' ? 'completed' : 'pending';
              const newBadge = newStatus === 'completed' ? 'Done' : 'pending';
              const newBadgeClass = newStatus === 'completed' ? 'bg-light-success font-success' : 'bg-light-danger font-danger';
              return {
                  ...item,
                  status: newStatus,
                  badge: newBadge,
                  badgeClass: newBadgeClass,
              };
          }
          return item;
      });
  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoApiData.fulfilled, (state, action) => {
      state.todoList = action.payload;
    });
  },
});

export const { setShowSideBar, setTask, addNewTodo, removeItems ,updateTodo,addtaskShow,markTaskAsCompleted} = ToDoSlice.actions;

export default ToDoSlice.reducer;
