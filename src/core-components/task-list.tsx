import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use.task";
import TaskItem from "./task-item";
import { TaskState } from "../models/task";

export default function TaskLIst(){
    const {tasks} = useTasks();
    const {prepareTask} = useTask();


    function handleNewTask() {
        prepareTask();
    }

    return(
      <>
        <section>
            <Button icon={PlusIcon} 
             className="w-full" 
             onClick={handleNewTask}
             disabled={tasks.some((task) => task.state === TaskState.Creating)}
            >
                Nova Tarefa
            </Button>
        </section>

        <section className="space-y-4">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} 
                />
            ))}
            
        </section>
      </>

    )
}