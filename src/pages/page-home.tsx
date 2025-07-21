import Container from '../components/container';
import TaskLIst from '../core-components/task-list';
import TasksSumary from '../core-components/tasks-sumary';


export default function PageHome() {
    return (
      <Container as="article" className="space-y-6">
        <header className="flex items-center justify-between">
          <TasksSumary />
        </header>
          <TaskLIst />
      </Container>
    );
}