import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "task/fetchTasks",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await response.json();
    return data;
  }
);

export const addAsyncTask = createAsyncThunk(
    "task/addAsyncTask",
    async (task) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
            method: 'POST',
            body: JSON.stringify({
                task
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
        const data = await response.json();
        return data;
    }
)


export const deleteAsyncTask = createAsyncThunk(
    "task/deleteAsyncTask",
    async (taskId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
            method: 'DELETE',
            });
        return taskId;
    }
)

export const updateAsyncTask = createAsyncThunk(
    "task/updateAsyncTask",
    async (task) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                task
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        return data;
    }
)


const taskSlice = createSlice({
    name: 'task',
    initialState: {
        lastId : 5,
        tasks: [
        // {
        //   userId: 1,
        //   id: 1,
        //   title: "delectus aut autem",
        //   completed: false
        // },
        // {
        //   userId: 1,
        //   id: 2,
        //   title: "quis ut nam facilis et officia qui",
        //   completed: true
        // },
        ]
    },
    reducers: {
        add(state, action){
            state.tasks.push({
                userId: 1,
                id: state.lastId + 1, // Corrected from state.id to state.lastId
                title: action.payload,
                completed: false
            });
            state.lastId++; // Corrected from state.id++
        },
        remove(state, action){
            const index = state.tasks.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        },
        update(state, action) {
            const task = state.tasks.find(task => task.id === action.payload.taskId);
            if (task) {
                task.completed = !task.completed;
            }
        },   
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
        builder.addCase(addAsyncTask.fulfilled, (state, action) => {
            console.log(action.payload.task);
            const {userId, title, completed} = action.payload.task;
            state.tasks.push({
                userId: userId,
                id : state.lastId + 1,
                title: title,
                completed: completed
                // userId: userId,
                // id: state.lastId + 1,
                // title: title,
                // completed: completed
                // userId: 1,
                // id: state.lastId + 1,
                // title: action.payload.title,
                // completed : false
            });
            state.lastId++;
        });
        builder.addCase(deleteAsyncTask.fulfilled, (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        });
        builder.addCase(updateAsyncTask.fulfilled, (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if(index !== -1){
                state.tasks[index].completed = !state.tasks[index].completed;
            }
        });
    }
})




export const {
    add,
    remove,
    update
} = taskSlice.actions

export default taskSlice.reducer;