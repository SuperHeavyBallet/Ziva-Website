import styles from "./orderForm.module.css"
import { useState } from "react";

export default function OrderForm()
{
    const [ currentCartContents, setCurrentCartContents ] = useState( () =>
    {
        const savedCart =  localStorage.getItem("currentCartContents");
        const initialCartValue = JSON.parse(savedCart);
        return initialCartValue || [];
    });

    function handleSubmitOrder(e)
    {
        e.preventDefault();

        window.alert(currentCartContents);
    }

    return(
        <div>
            Order Form
            <form>
                <label for="orderNameField">Your Name:</label>
                <input id="orderNameField" name="orderNameField" placeholder="Your Name"></input>

                <button onSubmit={() => handleSubmitOrder(e)}>Send Order</button>
            </form>
        </div>
    )
}