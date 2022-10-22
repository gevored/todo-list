import styles from './style.module.css'

import logo from '../../asset/images/Logo.svg'
export function Header(){
    return(
        <div className={styles.container}>
            <div>
                <img src={logo} />  
            </div>
        </div>
    )
}