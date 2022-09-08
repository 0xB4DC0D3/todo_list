import Sidebar from "@components/sidebar"
import TodoList from "@components/todolist"
import { useEffect, useState } from "react"
import { fetchMockTodo, Todo as TodoType } from "../__mock_api__/fetchMockTodo"

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMockTodo(2, 10); 
      setTodos(data.todos);
    }

    fetchData();
  }, [todos]);

  return (
    <div className="flex font-['Karla'] bg-[#F2F4F7] overflow-hidden">
      <Sidebar todoCount={todos.length} notificationCount={todos.filter(v => v.image).length} />
      <TodoList todos={todos} />
    </div>
  );
}