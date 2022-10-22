import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { contextDashBoard } from '../../context/contextDasBoard'
import { DefaultMessageDash } from '../DefaultMessageDash/index'
import {ItemTask} from '../ItemTask/index'


export function DashBoard() {

    const { listTask } = useContext(contextDashBoard)

    const [tarefasCriadas, setTarefasCriadas] = useState(listTask.length)
    const [tarefasConcluidas, setTarefasConcluidas] = useState(0)


    function countTaskDone (){
        const count = listTask.filter(obj => {
            if (obj.isDone === true) {
              return true;
            }
            return false;
          }).length;

          return count
    }

    useEffect(() => {
            setTarefasCriadas(listTask.length)
            setTarefasConcluidas(countTaskDone())
    }, [listTask]);


    const te = listTask.length === 0 ? 'vazio' : 'preenchido'
    

    return (
        <div className={styles.container}>
            <div className={styles.infoContent}>
                <span>Tarefas Criadas: <p className={styles.contador}>{tarefasCriadas}</p></span>
                <span>Tarefas Concluídas:<p className={styles.contador} >{tarefasConcluidas}</p></span>
            </div>

            <div className={listTask.length >0 ?  styles.contentFilled  : styles.contentDefault }>
                {   
                listTask?.map((task , index)=> (
                    <ItemTask key = {index} flagTaskDone = {task.isDone} descTask= {task.task} index = {index}/>
                ))}
            </div>
        </div>
    )
}