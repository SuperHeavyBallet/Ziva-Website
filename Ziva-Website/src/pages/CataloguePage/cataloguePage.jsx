import NavBar from "../../Components/NavBar/navBar"
import VerticalTextMenu from "../../Components/VerticalTextMenu/verticalTextMenu"
import styles from "./cataloguePage.module.css"
import products from "../../../public/products.json"
import VerticalPreviewMenu from "../../Components/VerticalPreviewMenu/verticalPreviewMenu"
import ItemView from "../../Components/ItemView/itemView"
import { useState, useEffect } from "react"
import Footer from "../../Components/Footer/footer"
import ShoppingCart from "../../Components/ShoppingCart/shoppingCart"
import Button from "../../Components/Button/button"


export default function CataloguePage( {updateShoppingCartContents})
{
    useEffect(() => {
        backToTop();
      }, []);

      function backToTop()
      {
        window.scrollTo(0, 0);
      }
    const uniqueGroups = Array.from(new Map(products.map(item => [item.group, item.groupName])).entries()).map(([group, groupName]) => ({ group, groupName }));

   

    
    const [ groupToDisplay, setGroupToDisplay ] = useState(products[0].group)
    const [ groupNameToDisplay, setGroupNameToDisplay ] = useState(products[0].groupName)
    const [ itemToDisplay, setItemToDisplay ] = useState(products[0]);


    function handleItemClicked(itemID)
    {
        setItemToDisplay(products[itemID]);
        setGroupToDisplay(products[itemID].group);
        setGroupNameToDisplay(products[itemID].groupName);
        window.scrollTo(0, 0);
    }
    function handleGroupClicked(groupName)
    {
        setGroupToDisplay(groupName);
        const chosenItems = products.filter(product => (product.group === groupName))
        setItemToDisplay(chosenItems[0]);
        setGroupNameToDisplay(chosenItems[0].groupName);
        window.scrollTo(0, 0);
    }

    const [ currentCartContents, setCurrentCartContents ] = useState([]);

    function updateShoppingCart(itemToAdd)
    {
        setCurrentCartContents([...currentCartContents, itemToAdd.name]);

    }

    useEffect(() =>
    {
        //updateShoppingCartContents(currentCartContents);
    }, [currentCartContents]);


    return(
        <div className={styles.pageContainer}>
            <NavBar />

            <div className={styles.cataloguePageTopBanner}>
                Add Items To Your Shopping List and Send an Email Enquiry!

            </div>
        <div className={styles.cataloguePageContent}>

            
            <div className={styles.leftMenu}>

            {
                uniqueGroups.map(group => (
                    <VerticalTextMenu 
                        inputItems={products}
                        groupTitle={group.groupName}
                        filterGroup={group.group}
                        groupClicked={(groupClicked) => handleGroupClicked(groupClicked)}
                        itemClicked={(productID) => handleItemClicked(productID)}
                    />
                ))
            }
            
            </div>

            <div className={styles.centreSection}>
                <ItemView 
                    selectedItem={itemToDisplay}
                    onClickAddToCart={(itemToAdd) => updateShoppingCart(itemToAdd)}
                />

<ShoppingCart 
                cartContents={currentCartContents}
                
            />
            </div>
            
            <div className={styles.rightSection}>
                <VerticalPreviewMenu 
                    inputItems={products}
                    clickedItem={(itemID) => handleItemClicked(itemID)}
                    groupTitle={groupNameToDisplay}
                    filterGroup={groupToDisplay}
                />
            </div>
            </div>

            <Button 
            buttonText="Back to top"
            buttonFunction={() => backToTop()}
        />
            <Footer />

        </div>
    )
}