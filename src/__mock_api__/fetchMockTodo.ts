import Todos from "./todo.json"

export const fetchMockTodo = async (page = 1, limit = 10) => ({
  todos: Todos.slice((page - 1) * limit, page * limit),
  pages: Math.ceil(Todos.length / limit),
  totalTodos: Todos.length
});

export type Todo = typeof Todos[0];