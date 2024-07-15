import styles from "./gridPreviewMenu.module.css"

export default function GridPreviewMenu( {inputItems, groupTitle, filterGroup, clickedItem})
{
    const filteredItems = inputItems.filter(item => (item.group === filterGroup));

    function handleItemClick(itemID)
    {
        
        clickedItem(itemID);
    }

    return(
        <div className={styles.gridPreviewMenuContainer}>
            <h4>{groupTitle}</h4>
            <div className={styles.gridPreviewMenu}>
                {filteredItems.map((item, index) => (
                    <div 
                    key={index}
                    className={styles.previewItem}
                    onClick={() => handleItemClick(item.id)}>
                        
                        <img src={item.image}></img>
                        <div>{item.name}</div>
                    </div>
                    
                    
                ))}
            </div>
        </div>
    )
}