import styles from './Contact.module.css'
import mapa from '../../img/mapa.png'


function Contact() {
    return (
      <container className={styles.container}>
            <h2>Venha nos visitar!</h2>
            <h2>Estamos no Shopping Partage sala 61 - 6º Andar</h2>
            
            <img src={mapa} alt="mapa"/>
            <h3>(99)99999-9999</h3>


      </container>
    )
}

export default Contact