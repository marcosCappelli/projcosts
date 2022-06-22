import styles from './Company.module.css'
import saving from '../../img/saving.png';

function Company() {
    return (
    <container className={styles.container}>
       
        <h1>Somos uma empresa focada em economia!</h1>
         <img src={saving} alt="Costs"/>
         
    </container>
   
    )
}



export default Company;