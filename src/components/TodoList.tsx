import DeleteButton from "./DeleteButton";

const initialTodos = ["buy groceries", "walk the dog", "do the laundry"];

export default function TodoList() {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <li
          key={todo} // would have been better if we have had id in our list and we had objects inside the list
          // because todolist would not be more than 100 most likely. It is okay to use same keys. React can handle it with performance.

          className="flex justify-between items-center px-8 h-[50px] cursor-pointer text-[14px] border-b border-black/[8%]"
        >
          <span>{todo}</span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}
