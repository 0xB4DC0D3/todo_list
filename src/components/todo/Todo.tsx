import previewImage from "./assets/preview.jpeg"
import linkIcon from "./assets/link.svg"
import paperClipIcon from "./assets/paper-clip.svg"
import commentsIcon from "./assets/comments.svg"

type TodoProps = {
  id: string;
  author: string;
  status: "todo" | "active" | "done";
  image?: boolean;
  name: string;
  description?: string;
  deadline: string;
  tags?: string[];
  link?: string | null;
  attachment?: string[];
  responsible?: {id: string; name: string}[];
  comments?: {name: string; content: string}[];
}

export function TodoMetadata(props: Pick<TodoProps, "deadline" | "name" | "author">) {
  return (
    <div className="flex flex-col gap-[6px]">
      <h1 className="font-bold text-xl text-gray-800 cursor-pointer">{props.name}</h1>
      <span className="font-bold text-sm text-gray-400">{props.deadline} — Created by <span className="cursor-pointer text-gray-500">{props.author}</span></span>
    </div>
  );
}

export function Description({description}: Pick<TodoProps, "description">) {
  return <p className="font-medium text-sm text-gray-400 truncate">{description}</p>
}

export function Preview() {
  return <img className="w-full h-20 rounded-lg object-cover" src={previewImage} alt="" />;
}

export function TodoLink({link}: Pick<TodoProps, "link">) {
  return (
    <a href={`//${link}`} target="_blank" rel="noreferrer" className="font-medium text-sm w-28 text-gray-400 truncate">
      <img className="inline-block mr-[6px] h-[18px] w-[18px]" src={linkIcon} />
      {link}
    </a> 
  );
}

export function Attachment({attachment}: Pick<TodoProps, "attachment">) {
  return (
    <>{attachment?.length != 0 && 
      <a href={`/${attachment}`} download target="_blank" rel="noreferrer" className="font-medium text-sm w-28 text-gray-400 truncate">
        <img className="inline-block mr-[6px] h-[18px] w-[18px]" src={paperClipIcon} />
        {attachment?.at(0)}
      </a>
    }</>
  )
}

export function Tags({tags}: Pick<TodoProps, "tags">) {
  return (
    <>{tags?.length != 0 && 
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, i) => (
          <span key={i} className="cursor-pointer hover:bg-green-100 hover:text-green-500 text-sm rounded-md bg-gray-100 text-gray-600 py-1 px-3">{tag}</span>
        ))}
      </div>
    }</>
  );
}

export function Comments({comments}: Pick<TodoProps, "comments">) {
  return (
    <span className="cursor-pointer flex font-medium gap-[6px] text-sm w-10 text-gray-400">
      <img className="h-[18px] w-[18px]" src={commentsIcon} />
      <p>{comments?.length}</p>
    </span>
  );
}

export function Responsible({responsible}: Pick<TodoProps, "responsible">) {
  return (
    <div className="flex gap-1">
      {responsible?.map(responsible => (
        <img 
          key={responsible.id} 
          src={previewImage} 
          alt={responsible.name}
          title={responsible.name} 
          className="w-5 h-5 object-cover rounded-full"
        />
      ))}
    </div>
  );
}

export default function Todo(props: TodoProps) {
  return (
    <div className="flex flex-col w-80 p-5 gap-4 bg-[#FCFCFD] rounded-lg border">
      <TodoMetadata {...props} />
      <div className="flex flex-col gap-3">
        {props.description && <Description {...props} />}
        {props.image && <Preview />}
        {(props.link || props.attachment?.length != 0) &&
          <div className="flex justify-start gap-3">
            {props.link && <TodoLink {...props} />}
            {props.attachment && <Attachment {...props} />}
          </div>
        }
        {props.tags && <Tags {...props} />}
        {(props.comments || props.responsible) &&
          <div className="flex justify-between gap-3 mt-[6px]">
            {props.comments && <Comments {...props} />}
            {props.responsible && <Responsible {...props} />}
          </div>
        }
      </div>
    </div>
  );
}