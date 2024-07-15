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
import TopBanner from "../../Components/TopBanner/topBanner"
import { useLocation } from "react-router-dom"


export default function CataloguePage( {updateShoppingCartContents, incomingProductID})
{
    const location = useLocation();
    const { productID } = location.state || {}; // Access the productID from the state
    

    
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
    const [ itemToDisplay, setItemToDisplay ] = useState(products[productID] || products[0]);
    const [ quantityToAdd, setQuantityToAdd ] = useState(0);


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

    function updateShoppingCart(itemToAdd, itemQuantity)
    {
        console.log(itemToAdd);

        //Check if item already in cart, if so, update quantity but don't add new item
        if (currentCartContents.find((item) => item.name === itemToAdd.name))
        {
            const index = currentCartContents.findIndex(item => item.name === itemToAdd.name);
            
            if (index !== -1) {
                const updatedItem = {
                    name: itemToAdd.name,
                    item: itemToAdd,
                    quantity: currentCartContents[index].quantity + itemQuantity
                };

                if (updatedItem.quantity > 0)
                {
                    // Update the item in place to keep the original order
                const updatedCart = [...currentCartContents];
                updatedCart[index] = updatedItem;
                setCurrentCartContents(updatedCart);
                }
                else
                {

                    handleRemoveItem(itemToAdd);
                }
            }
            

        }
        else
        {
            setCurrentCartContents([...currentCartContents, { name: itemToAdd.name, item: itemToAdd, quantity: itemQuantity}]);
        }

        
        

    }

    function handleUpdateQuantity(updateQuantity)
    {
        console.log("Quant: " , updateQuantity[0].name);

        const itemToUpdateName = updateQuantity[0].name;
        const itemToUpdate = products.find((item) => item.name === itemToUpdateName);

        const amountToAdjustBy = updateQuantity[1];

        updateShoppingCart(itemToUpdate, amountToAdjustBy);
    }

    useEffect(() =>
    {
       
    }, [currentCartContents]);


    function handleRemoveItem(item)
    {
       if (window.confirm("Remove Item?"))
       {
            item.quantity = Number(0);
            const updatedShoppingCart = currentCartContents.filter(cartItem => cartItem.name !== item.name);
            setCurrentCartContents(updatedShoppingCart);
       }
        
    }

    useEffect(() =>
    {
        //updateShoppingCartContents(currentCartContents);
    }, [currentCartContents]);


    return(
        <div className={styles.pageContainer}>
            <NavBar />

            <TopBanner 
            className={styles.topBanner}
            bannerText="Add Items To Your Shopping List and Send an Email Enquiry!"
            />

            
        <div className={styles.cataloguePageContent}>

            
            
            <div className={styles.leftMenu}>
            
            {
                uniqueGroups.map((group, index )=> (
                    <VerticalTextMenu 
                    key={index}
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
                    onClickAddToCart={(itemToAdd, itemQuantity) => updateShoppingCart(itemToAdd, itemQuantity)}
                />

            <ShoppingCart 
                cartContents={currentCartContents}
                onRemoveItem={(item) => handleRemoveItem(item)}
                itemClicked={(productID) => handleItemClicked(productID)}
                itemQuantityAdjusted={(adjustQuantity) => handleUpdateQuantity(adjustQuantity)}
                
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