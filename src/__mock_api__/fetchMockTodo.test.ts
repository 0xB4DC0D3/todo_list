import { fetchMockTodo } from "./fetchMockTodo"

test("fetchMockTodo", async () => {
  let [todo] = (await fetchMockTodo(2, 5)).todos;
  expect(todo.author).toBe("Hubbard");

  [todo] = (await fetchMockTodo(2, 10)).todos;
  expect(todo.author).toBe("Magdalena");

  let [lastTodoFromPage] = (await fetchMockTodo(1, 10)).todos.slice(-1);
  expect(lastTodoFromPage.author).toBe("Alma");
});