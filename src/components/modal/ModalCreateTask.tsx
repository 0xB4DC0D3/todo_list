import Modal from "./Modal"

type ModalCreateTaskProps = {
  onClose: () => void;
  className: string;
}

export default function ModalCreateTask(props: ModalCreateTaskProps) {
  return (
    <Modal title="Add task" {...props}>
      
    </Modal>
  );
}