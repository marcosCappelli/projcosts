import styles from "../project/ProjectCard.module.css"
import {BsFillTrashFill} from 'react-icons/bs'

function ServiceCard({id, name, cost, descripition, handleRemove}) {
    
    const remove = (e) => {}
    
    return (
        <div className={styles.project_card}>  
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
            </p>
            <p>{descripition}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>

    )
}

export default ServiceCard