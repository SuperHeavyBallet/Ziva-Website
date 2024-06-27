import styles from "./verticalPreviewMenu.module.css"

export default function VerticalPreviewMenu( {inputItems, groupTitle, filterGroup, clickedItem})
{
    const filteredItems = inputItems.filter(item => (item.group === filterGroup));

    function handleItemClick(itemID)
    {
        
        clickedItem(itemID);
    }

    return(
        <div className={styles.verticalPreviewMenuContainier}>
            <div>{groupTitle}</div>
            <ul>
                {filteredItems.map(item => (
                    
                    <li
                        key={item.id} 
                        className={styles.verticalPreviewMenuElement}
                        onClick={() => handleItemClick(item.id)}
                    >{item.name}</li>
                    
                ))}
            </ul>
        </div>
    )
}