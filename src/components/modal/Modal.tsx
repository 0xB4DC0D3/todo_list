type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
  className?: string;
}

type CloseIconProps = {
  onClick: () => void;
}

export const CloseIcon = ({onClick}: CloseIconProps) => (
  <svg 
    fill="#000000" 
    xmlns="http://www.w3.org/2000/svg"  
    viewBox="0 0 24 24" 
    width="16px" height="16px"
    onClick={onClick}
    className="cursor-pointer"
  >
    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
  </svg>
);

export default function Modal(props: ModalProps) {
  const handleClose: React.MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    } 
  }

  return (
    <div 
      className="flex fixed h-screen w-screen z-10 bg-black bg-opacity-25 justify-center items-center backdrop-blur-sm" 
      onClick={handleClose}
    >
      <div className={`shadow-2xl shadow-black flex flex-col bg-white rounded-2xl border overflow-hidden ${props.className}`}>
        <div className="flex justify-between items-center py-2 px-4 bg-gray-50 border-b">
          <h1>{props.title}</h1>
          <CloseIcon onClick={props.onClose}/>
        </div>
        <div className="py-2 px-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}