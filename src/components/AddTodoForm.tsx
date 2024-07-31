import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm(todos, setTodos) {
  const [formText, setFormText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: formText,
            isCompleted: false,
          },
        ]);
        setFormText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        onChange={(e) => {
          setFormText(e.target.value);
        }}
        type="text"
        autoFocus
        className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[0] text-[14px]"
        value={formText}
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}
