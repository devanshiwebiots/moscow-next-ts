import { AddTask, ToDoPlaceholder } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewTodo, addtaskShow, setTask } from "@/Redux/Reducers/ToDoSlice";
import React from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

export const ToDoHeader = () => {
  const { task, addtask } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleNewTask = () => {
    if (task === "") {
      toast.error("please add your todo");
    } else {
      dispatch(addNewTodo(task));
      dispatch(setTask(" "));
      toast.success(`Task add ${task}`);
    }
  };

  const onTaskChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(e.currentTarget.value));
  };

  return (
    <div className={`new-task-wrapper mb-5 mt-5 ${addtask ? "visible" : ""}`}>
      <Input className='mb-1' value={task} placeholder={ToDoPlaceholder} onChange={(e) => onTaskChanged(e)}></Input>
      <Button color='danger' className='cancel-btn' onClick={() => dispatch(addtaskShow())}>
        Close
      </Button>
      <Button color='primary' className='ms-3 add-new-task-btn' onClick={handleNewTask}>
        {AddTask}
      </Button>
    </div>
  );
};
