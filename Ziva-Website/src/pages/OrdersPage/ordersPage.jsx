import NavBar from "../../Components/NavBar/navBar";
import ShoppingCart from "../../Components/ShoppingCart/shoppingCart";
import styles from "./ordersPage.module.css"
import { useState, useEffect } from "react";
import products from "../../../public/products.json"
import OrderForm from "../../Components/OrderForm/orderForm";

export default function OrdersPage( {shoppingCartContents, onRemoveItem, itemClicked, itemQuantityAdjusted} )
{

    const [ currentCartContents, setCurrentCartContents ] = useState( () =>
    {
        const savedCart =  localStorage.getItem("currentCartContents");
        const initialCartValue = JSON.parse(savedCart);
        return initialCartValue || [];
    });
    
    function handleRemoveItem(item)
    {
        if (window.confirm("Remove Item?"))
       {
            item.quantity = Number(0);
            const updatedShoppingCart = currentCartContents.filter(cartItem => cartItem.name !== item.name);
            setCurrentCartContents(updatedShoppingCart);
       }
    }

    function handleItemClicked(productID)
    {
        window.alert("Clicked", productID);
    }

    function handleUpdateQuantity(updateQuantity)
    {


        const itemToUpdateName = updateQuantity[0].name;
        const itemToUpdate = products.find((item) => item.name === itemToUpdateName);

        const amountToAdjustBy = updateQuantity[1];

        updateShoppingCart(itemToUpdate, amountToAdjustBy);
    }

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
                    quantity: Number(currentCartContents[index].quantity + itemQuantity)
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

  

    useEffect(() =>
    {
       localStorage.setItem("currentCartContents" , JSON.stringify(currentCartContents));
    }, [currentCartContents]);

    return(
        <div>

            <NavBar />
            <div className={styles.pageContainer}>
            <div className={styles.orderPageShoppingCart}>
                <ShoppingCart cartContents={currentCartContents} 
                onRemoveItem={(item) => handleRemoveItem(item)}
                itemClicked={(productID) => handleItemClicked(productID)}
                itemQuantityAdjusted={(adjustQuantity) => handleUpdateQuantity(adjustQuantity)}
                isOrderPage={true}
                />
                

            </div>
            
            <div className={styles.orderSection}>
                <OrderForm 
                    cartContents={currentCartContents}
                
                />
            </div>
            </div>
        </div>
    )


}