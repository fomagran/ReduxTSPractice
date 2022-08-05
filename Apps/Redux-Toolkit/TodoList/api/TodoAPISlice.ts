import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoAPISlice = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.111.34:3000'}),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    getAllTodos: builder.query<TodoModel[], String>({
      query: () => '/allTodos',
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todo: TodoModel) => ({
        url: '/addTodo',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    editTodo: builder.mutation({
      query: (todo: TodoModel) => ({
        url: `/todo/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: (id: number) => ({
        url: `/todo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = todoAPISlice;
