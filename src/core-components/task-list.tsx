import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use.task";

export default function TaskLIst(){
    const {tasks} = useTasks();
    const {prepareTask} = useTask();

    console.log(tasks);

    function handleNewTask() {
        prepareTask();
    }

    return(
        <>
        <section>
            <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>Nova Tarefa</Button>
        </section>

        <section className="space-y-4">
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </section>
        </>

    )
}