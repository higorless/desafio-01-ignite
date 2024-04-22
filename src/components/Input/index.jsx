import styles from './Input.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'

export function Input ({ sendValueToParent }) {
  const [inputValue, setInputValue] = useState('');
  const [objectId, setObjectId] = useState(0);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const finalTaskContent = inputValue;
    
    const mockedContent = {
      id: objectId, // Use o estado objectId como ID da tarefa
      finalTaskContent
    };

    // Incrementa o estado do objectId para o próximo ID
    setObjectId(prevId => prevId + 1);

    // Envia os dados da nova tarefa para o componente pai
    sendValueToParent(mockedContent);

    // Limpa o valor do input após enviar a tarefa
    setInputValue('');
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.inputWrapper}> 
      <input 
        placeholder='Adicione uma nova tarefa' 
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">
        Criar
        <PlusCircle size={18}/>
      </button>
    </form>
  )
}