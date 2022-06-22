import styles from './Company.module.css';
import saving from '../../img/saving.png';
import grafico1 from '../..img/grafico1.jpg';
import grafico2 from '../..img/grafico2.png';
import grafico3 from '../..img/grafico3.png';


function Company() {
    return (
    <container className={styles.container}>
       
        <h1>Somos uma empresa focada em economia!</h1>
         <div>
         <img src={saving} alt="Costs"/>
         <img src={grafico1} alt="Grafico1"/>
         <img src={grafico2} alt="Grafico2"/>
         <img src={grafico3} alt="Grafico3"/>
         </div>
    </container>
   
    )
}



export default Company;