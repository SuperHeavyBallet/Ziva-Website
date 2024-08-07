import { useEffect, useState } from "react";
import styles from "./verticalTextMenu.module.css"

export default function VerticalTextMenu( 
    { inputItems, groupTitle, filterGroup, 
        groupClicked, itemClicked, hideOtherGroups
    } )
{
    const filteredItems = inputItems.filter(item => (item.group === filterGroup));
    const [ itemsHidden, setItemsHidden ] = useState(true);

    const [ visibleItem, setVisibleItem ] = useState(null);

    function handleGroupClick()
    {
  
        groupClicked(filteredItems[0].group);

        
        if (itemsHidden)
        {
            setItemsHidden(false);
        }
        else
        {
            setItemsHidden(true);
        }



        

    }

    function hideGroup()
    {
        if (hideOtherGroups)
        {

            for (let i = 0; i <hideOtherGroups.length; i++)
            {
                if (hideOtherGroups[i].group === filteredItems[0].group)
                {
                    setItemsHidden(true);

                }
            }
        }
    }

    useEffect(() => 
    {
        hideGroup();
    }, [hideOtherGroups])
    function handleItemClick(productID)
    {
        
        itemClicked(productID);
     
        
    }

    return(
        <div className={styles.groupSection}>
            <div className={styles.groupTitleArea} onClick={() => handleGroupClick()}>
                <h4 className={styles.groupTitle}>
                    {groupTitle}
                    </h4>

                <svg fill="#000000" height="200px" width="200px" 
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 330 330" xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
            </div>
            <ul 
            >
                
            {
                filteredItems.map(product => (
                    <li 
                    
                    onClick={() => handleItemClick(product.id)}
                        className={`${styles.groupElement} 
                            ${
                               itemsHidden ? styles.hidden : styles.visible
                               
                            }`}
                        key={product.id}>
                        {product.name}
                        </li>
                ))
            }
            </ul>
        </div>
    )
}