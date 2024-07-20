import styles from "./orderForm.module.css"
import { useEffect, useState } from "react";

export default function OrderForm()
{
    const [ currentCartContents, setCurrentCartContents ] = useState( () =>
    {
        const savedCart =  localStorage.getItem("currentCartContents");
        const initialCartValue = JSON.parse(savedCart);
        return initialCartValue || [];
    });

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState(0);

    const [ orderContent, setOrderContent ] = useState({ name : "", email : "", phoneNumber : 0, orderItems : {}});
         


    function updateName(event)
    {
        setName(event.target.value);
    }
    function updateEmail(event)
    {
        setEmail(event.target.value);
    }
    function updatePhoneNumber(event)
    {
        setPhoneNumber(event.target.value)
    }

    function handleSubmitOrder(e)
    {
        e.preventDefault();


        setOrderContent( { name : name, email: email, phoneNumber: phoneNumber, orderItems: currentCartContents});

        
    }

    useEffect(() =>
    {
        console.log(orderContent);
    }, [orderContent])
    return(
        <div>
            Order Form
            
                <label htmlFor="orderNameField">Your Name:</label>
                <input id="orderNameField" name="orderNameField" placeholder="Your Name"  onChange={(event) => updateName(event)}></input>

                <label htmlFor="orderEmailField">Your Email:</label>
                <input id="orderEmailField" name="orderEmailField" placeholder="email@address.com"  onChange={(event) => updateEmail(event)}></input>

                <label htmlFor="orderPhoneField">Your Phone Number:</label>
                <input id="orderPhoneField" name="orderPhoneField" onChange={(event) => updatePhoneNumber(event)}></input>

                <button onClick={(e) => handleSubmitOrder(e)}>Send Order</button>

         
            
        </div>
    )
}