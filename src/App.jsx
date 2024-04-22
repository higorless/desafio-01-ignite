import './global.css'
import styles from  './App.module.css'
import { TasksTable } from './components/TasksTable'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { useState, useEffect } from 'react'

export function App() {
  const [childrenValue, setChildreValue] = useState('');

  function valueFromChildren (valueFromChildren) {
    setChildreValue(valueFromChildren);
  };

  useEffect(() => {console.log(childrenValue)}, [childrenValue]);

  return (
    <div className={styles.mainWrapper}>
        <Header/> 
      <main className={styles.mainContent}> 
        <div className={styles.formWrapper}>
          <Input sendValueToParent={valueFromChildren}/>
          <TasksTable
            taskContent={childrenValue}/>
        </div>
      </main>
    </div>
  )
}

export default App
