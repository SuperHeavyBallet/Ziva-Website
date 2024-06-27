import styles from "./verticalTextMenu.module.css"

export default function VerticalTextMenu( 
    { inputItems, groupTitle, filterGroup, 
        groupClicked, itemClicked
    } )
{
    const filteredItems = inputItems.filter(item => (item.group === filterGroup));

    function handleGroupClick()
    {
        //window.alert(filteredItems[0].group);
        groupClicked(filteredItems[0].group);
    }
    function handleItemClick(productID)
    {
        
        itemClicked(productID);
        
        
    }

    return(
        <div>
            <h4
                className={styles.groupTitle}
                onClick={() => handleGroupClick()}
            >
                {groupTitle}
            </h4>
            <ul 
            >
                
            {
                filteredItems.map(product => (
                    <li 
                    onClick={() => handleItemClick(product.id)}
                        className={styles.groupElement}
                        key={product.id}>
                        {product.name}
                        </li>
                ))
            }
            </ul>
        </div>
    )
}