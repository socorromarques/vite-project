import React, { useState } from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckBox from "../components/input-checkbox";
import Text from "../components/text";
import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: string, isChecked: boolean) => void;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  );

  const [taskTitle, setTaskTitle] = React.useState("")

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({id: task.id, taskTitle});
    // chamada para função de atualizar;
    setIsEditing(false);
  }


  return (
    <Card size="md">
        <div className="flex items-center gap-4">
          <InputCheckBox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>

          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
            type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText 
           className="flex-1" 
           onChange={handleChangeTaskTitle} 
           required 
           autoFocus
           />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon
              icon={CheckIcon}
              variant="primary"
            />
          </div>
        </form>
    </Card>
  );
}
