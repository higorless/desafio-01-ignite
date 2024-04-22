/* eslint-disable react/prop-types */
import { CheckCircle, Circle } from '@phosphor-icons/react'
import styles from './Checkbox.module.css'
import { useState } from 'react'

export function Checkbox ({ checkboxChanged }) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheck () {
    setIsChecked(!isChecked);
    checkboxChanged(!isChecked) 
  }

  return (
    <div className={styles.checkBox}>
      <input 
        type='checkbox'
        checked={isChecked} 
        onChange={handleCheck} 
      />
      {
        isChecked ? (
          <CheckCircle size={30}/>
         ) : (
           <Circle size={30}/>
         )
      }
    </div>
  )
}