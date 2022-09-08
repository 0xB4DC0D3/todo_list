import tasksIcon from "./assets/tasks.svg"
import notificationsIcon from "./assets/notifications.svg"
import Modal from "@components/modal";
import { useState } from "react";

type ItemProps = {
  logo: string;
  name: string;
  count: number;
}

export function Counter({count}: {count:number}) {
  return <span className="block text-xs font-thin mx-2 bg-gray-100 group-hover:bg-gray-800 group-hover:text-gray-100 rounded-lg px-1">{count}</span>
}

export function Item({logo, name, count}: ItemProps) {
  return (
    <li className="cursor-pointer group text-base text-gray-500 hover:text-gray-800 font-bold flex justify-between h-12 rounded-lg hover:bg-gray-100 items-center">
      <a>
        <img className="inline-block w-5 h-5 mx-2" src={logo} />
        {name}
      </a>
      <Counter count={count} />
    </li>
  );
}

type SidebarProps = {
  todoCount: number;
  notificationCount: number;
}

export default function Sidebar({todoCount, notificationCount}: SidebarProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between w-80 h-screen bg-white p-6 border-r">
        <nav className="block w-full">
          <ul className="flex flex-col gap-1">
            <Item logo={tasksIcon} name="Tasks" count={todoCount} />
            <Item logo={notificationsIcon} name="Notifications" count={notificationCount} />
          </ul>
        </nav>
        <a 
          className="cursor-pointer text-center block border bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-3xl"
          onClick={() => setOpenModal(true)}
        >Add task</a>
      </div>
      {openModal && 
        <Modal className="h-96 w-96" title="Add task" onClose={() => setOpenModal(false)}>
          test
        </Modal>
      }
    </>
  );
}