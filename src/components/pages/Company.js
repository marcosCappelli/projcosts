import styles from './Company.module.css';
import grafico from '../../img/grafico.jpg'
import grafico2 from '../../img/grafico2.png'
import grafico3 from '../../img/grafico3.png'

function Company() {
    return (
        <section className={styles.container}>
            <h1 >Uma empresa focada na economia!</h1>
            
            <img src={grafico2} alt="grafico2"/>
            
            <img src={grafico} alt="grafico"/>
            
            <img src={grafico3} alt="grafico3"/>

        </section>
    )
}



export default Company;