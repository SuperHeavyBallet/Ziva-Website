import styles from "./itemView.module.css"

export default function ItemView( {selectedItem})
{
    return(
        <div className={styles.itemViewContainer}>
            <h3>{selectedItem.name}</h3>
            <img src={selectedItem.image}></img>
            <h3>{selectedItem.price}</h3>
            <p>{selectedItem.description}</p>
            </div>
    )
}