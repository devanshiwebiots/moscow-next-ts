import { Fragment } from "react";
import { CheckCircle } from "react-feather";
import { Button, Modal, ModalBody } from "reactstrap";
import { AddTask, NewTask } from "@/Constant";
import { setAddModal } from "@/Redux/Reducers/TaskSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { NewTaskModalForm } from "./NewTaskModalForm";

const NewTaskClass = () => {
  const { addModal } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const addToggle = () => dispatch(setAddModal());

  return (
    <Fragment>
      <Button block color="primary" className="badge-primary btn-mail w-100" onClick={addToggle}><CheckCircle className="me-2" />{NewTask}</Button>
      <Modal size="lg" isOpen={addModal} toggle={addToggle}>
        <div className="modal-header">
          <h5 className="modal-title">{AddTask}</h5>
          <Button close color="transprant" onClick={addToggle} />
        </div>
        <ModalBody>
          <NewTaskModalForm />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;
