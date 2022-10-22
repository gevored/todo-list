import styles from './style.module.scss'
import { useContext, useState } from 'react'
import {contextDashBoard} from '../../context/contextDasBoard'

export function TaskField(){

    const [field, setField] = useState('')
    
    const {listTask, setListTask} = useContext(contextDashBoard)

    function handleSearchField(){

        const newTask = {
            task:field,
            isDone: false
        }
        setListTask([...listTask, newTask])
        setField('')
    }

    return(
        <div className={styles.container}>
            <input 
                onChange={(e)=>{setField(e.target.value)}}
                value={field}
                type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.button}
            onClick = {handleSearchField}
            >
                Criar +
            </button>
        </div>
    )
}