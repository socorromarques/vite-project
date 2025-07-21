import Container from '../components/container';
import TaskItem from '../core-components/task-item';
import TasksSumary from '../core-components/tasks-sumary';


export default function PageHome() {
    return (
      <Container as="article" className="space-y-6">
        <header className="flex items-center justify-between">
          <TasksSumary />
        </header>

        <TaskItem />
      </Container>
    );
}