import Todo from "@components/todo"
import { Todo as TodoType } from "__mock_api__/fetchMockTodo"

type TodoListProps = {
  todos: TodoType[];
}

export default function TodoList(props: TodoListProps) {
  if (!props.todos.length) {
    return (
      <div className="flex justify-center w-full items-center">
        <h1 className="drop-shadow-xl shadow-black text-5xl text-gray-500">Oops... There is no tasks 😢</h1>
      </div>
    );
  }

  const todoTodos = props.todos.filter(todo => todo.status === 'todo');
  const activeTodos = props.todos.filter(todo => todo.status === 'active');
  const doneTodos = props.todos.filter(todo => todo.status === 'done');

  return (
    <div className="flex relative py-8 px-16 h-screen gap-4 w-full">
      <div className="absolute bg-gradient-to-b from-[#F2F4F7] h-4 w-full"></div>
      <div className="flex flex-col gap-4 no-scrollbar overflow-auto py-1">
        <h1 className="pt-4 text-gray-500 text-sm">🤯 TO DO</h1>
        {todoTodos.map(todo => (
          <Todo key={todo.id} {...todo} status={todo.status as 'todo'} />
        ))}
      </div>
      <div className="flex flex-col gap-4 no-scrollbar overflow-auto py-1">
        <h1 className="pt-4 text-gray-500 text-sm">✍️ DOING</h1>
        {activeTodos.map(todo => (
          <Todo key={todo.id} {...todo} status={todo.status as 'active'} />
        ))}
      </div>
      <div className="flex flex-col gap-4 no-scrollbar overflow-auto py-1">
        <h1 className="pt-4 text-gray-500 text-sm">😮‍💨 DONE</h1>
        {doneTodos.map(todo => (
          <Todo key={todo.id} {...todo} status={todo.status as 'done'} />
        ))}
      </div>
      <div className="absolute bottom-8 bg-gradient-to-t from-[#F2F4F7] h-4 w-full"></div>
    </div>
  )
}