import { Checkbox } from '@mui/material';
import styles from './styles.module.scss'
import { contextDashBoard } from '../../context/contextDasBoard'
import Trash from '../../asset/images/trash.svg'

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import { useState, useContext } from 'react';

export function ItemTask({ flagTaskDone, descTask, index }) {



    const { listTask, setListTask } = useContext(contextDashBoard)

    function handleTaskUpdate() {
        const newListOfTask = [...listTask];
        newListOfTask[index].isDone = !listTask[index].isDone;
        setListTask(newListOfTask);
    }

    function handleDeleteTask(){
        const listDeleted= listTask.splice(index,1);
        setListTask(listDeleted);
    }

    return (
        <div className={styles.container}>
            <span>
                <Checkbox
                    sx={{ borderRadius: '50%' }}
                    icon={<RadioButtonUncheckedIcon sx={{ color: '#4EA8DE' }} />}
                    checkedIcon={<CheckCircleRoundedIcon sx={{ color: '#5E60CE', bgcolor: 'white', borderRadius: '60%' }} />}
                    checked={flagTaskDone}
                    onChange={handleTaskUpdate}
                />
            </span>
            <div className={styles.descTaskContent}>
                <span>
                    <p>{descTask}</p>
                </span>
            </div>

            <div>

                <button
                    className={styles.button}
                    onClick = {handleDeleteTask}
                >
                    <img src={Trash} alt="trash icon" />
                </button>
            </div>
        </div>
    )
}