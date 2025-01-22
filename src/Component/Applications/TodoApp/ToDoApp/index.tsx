import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addtaskShow, markTaskAsCompleted } from "@/Redux/Reducers/ToDoSlice";
import { Card, CardBody, Col } from "reactstrap";
import TodoList from "./TodoList";
import { useState } from "react";
import { toast } from "react-toastify";

const ToDoApp = () => {
  const dispatch = useAppDispatch();
  const [markAll, setMarkAll] = useState(false);
  const { addtask, todoList } = useAppSelector((state) => state.todo);
  const markAllStatus = () => {
    if (markAll === true) {
      todoList.forEach((todo) => {
        dispatch(markTaskAsCompleted(todo.id));
      });
      toast.error("All Task In-Completed !");
    } else {
      todoList.forEach((todo) => {
        dispatch(markTaskAsCompleted(todo.id));
      });
      toast.success("All Task Completed !");
    }
    setMarkAll(!markAll);
  };
  return (
    <Col xxl='9' xl='8' className='box-col-12'>
      <Card>
        <CardBody>
          <div className='todo'>
            <div className='todo-list-wrapper theme-scrollbar'>
              <div className='todo-list-container'>
                <div className='mark-all-tasks'>
                  <div className='mark-all-tasks-container'>
                    <span className='mark-all-btn d-flex align-items-center gap-1'>
                    <span className={`btn-label txt-${markAll ? "success" : "danger"}`}>{!markAll ? "Mark all as finished" : "Mark all as Incomplete"}</span>
                      <span className={`action-box completed`} onClick={markAllStatus}>
                        {markAll && (
                          <i className='icon'>
                            <i className='icon-check' />
                          </i>
                        )}
                      </span>
                    </span>
                  </div>
                  <div className='todo-list-footer ms-2'>
                    <div className='add-task-btn-wrapper'>
                      <span className={`add-task-btn ${addtask ? "hide" : ""}`}>
                        <button className='btn btn-primary' onClick={() => dispatch(addtaskShow())}>
                          <i className='icon-plus'></i> Add new task
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <TodoList />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToDoApp;
