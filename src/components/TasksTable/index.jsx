import styles from './Tasks.module.css'
import { TaskCounter } from '../TaskCounter'
import { Tasks } from '../Tasks'
import { useState, useEffect } from 'react'

export function TasksTable ({ taskContent }) {
  const [tasks, setTasks] = useState([]);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);

  useEffect(() => {
    if (taskContent) {
      setTasks(prevTasks => [...prevTasks, taskContent]);
    }
  }, [taskContent]);

  function handleDeleteTask(id) {
    // Filtra as tarefas para remover a tarefa com o ID correspondente
    const updatedTasks = tasks.filter(item => item.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }
    
    setTasks(updatedTasks);
  }

  return (
    <div className={styles.mainWrapper}>
      <header className={styles.tasksInfos}> 
        <TaskCounter title="Tarefas Criadas" counter={tasks.length}/>
        {/* Passa o número total de tarefas concluídas como propriedade */}
        <TaskCounter completed title="Tarefas Concluídas" counter={totalTasksCompleted}/>
      </header>

      <main className={styles.tasksWrapper}>
        {
          tasks.map((item) => (
            <Tasks
              key={item.id}
              id={item.id}
              content={item.finalTaskContent}
              // Função de retorno de chamada para ser chamada quando uma tarefa é concluída
              onTaskCompleted={(completed) => setTotalTasksCompleted(prevTotal => prevTotal + (completed ? 1 : -1))}
              onDeleteTask={handleDeleteTask}
            />
          ))
        }
      </main>
    </div>
  )
}