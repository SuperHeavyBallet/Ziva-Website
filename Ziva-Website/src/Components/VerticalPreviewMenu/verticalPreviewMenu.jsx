import styles from "./verticalPreviewMenu.module.css"

export default function VerticalPreviewMenu( {inputItems, groupTitle, filterGroup, clickedItem})
{
    const filteredItems = inputItems.filter(item => (item.group === filterGroup));

    function handleItemClick(itemID)
    {
        
        clickedItem(itemID);
    }

    return(
        <div className={styles.verticalPreviewMenuContainer}>
            <h4>{groupTitle}</h4>
            <div>
                {filteredItems.map((item, index) => (
                    <div 
                    key={index}
                    className={styles.previewItem}
                    onClick={() => handleItemClick(item.id)}>
                        <div
                        key={item.id} 
                        className={styles.verticalPreviewMenuElement}
                        
                        >{item.name}</div>
                        <img src={item.image}></img>
                    </div>
                    
                    
                ))}
            </div>
        </div>
    )
}