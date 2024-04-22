import styles from './Tasks.module.css'
import { TrashSimple } from '@phosphor-icons/react'
import { Checkbox } from '../Checkbox'
import { useState } from 'react'

export function Tasks ({ content, onTaskCompleted, onDeleteTask, id }) {
  const [completed, setCompleted] = useState(false);

  function handleContentCompleted() {
    setCompleted(!completed); // Inverte o estado de completude da tarefa
    // Chama a função de retorno de chamada e passa o status de completude da tarefa
    onTaskCompleted(!completed);
  };

  function handleDeleteTask() {
    // Chama a função de exclusão de tarefa passada como propriedade com o ID da tarefa
    onDeleteTask(id);
  };

  return (
    <div className={completed ? styles.tasksWrapperCompleted : styles.tasksWrapper}> 
      <Checkbox 
        checkboxChanged={handleContentCompleted}
      />
      <p>{content}</p>
      <TrashSimple size={30} onClick={handleDeleteTask} />
    </div>
  )
}