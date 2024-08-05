import styles from "./horizontalProductsMenu.module.css"
import { useState } from "react";

export default function HorizontalProductMenu(
    { inputItems, groupTitle, filterGroup, 
        groupClicked, itemClicked
    } )
{
    const filteredItems = inputItems.filter(item => (item.group === filterGroup));
    const [ itemsHidden, setItemsHidden ] = useState(true);

    return (
        <div> Horizontal Menu
            <ul 
            >
                
            {
                filteredItems.map(product => (
                    <li 
                    
                    onClick={() => handleItemClick(product.id)}
                        className={`${styles.groupElement} 
                            ${itemsHidden ? styles.hidden : styles.visible}`}
                        key={product.id}>
                        {product.name}
                        </li>
                ))
            }
            </ul>
        </div>
    )
}