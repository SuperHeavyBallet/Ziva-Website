import { useEffect, useState } from "react"
import styles from "./receipt.module.css"

export default function Receipt( {customerName, customerEmail, customerPhone, customerOrder, customerTotalPrice})
{
   

    const [finalOrder, setFinalOrder] = useState({
        name: customerName,
        email: customerEmail,
        phoneNumber: customerPhone,
        order: customerOrder,
        totalPrice: customerTotalPrice,
    });

    useEffect(() =>
    {
        console.log("Final Order: ", finalOrder);
    },[finalOrder]);

    return(
        <div className={styles.receiptContainer}>
            <h4>{`Name: ${customerName}`}</h4>
            
            <h4>{`Email: ${customerEmail}`}</h4>
            <h4>{`Phone: ${customerPhone}`}</h4>
            <h4>Your Order:
            {
                    Array.isArray(customerOrder) ? (
                        customerOrder.map((orderItem, index) => (
                            <div className={styles.orderItem} key={index}>
                                <h5>{orderItem.quantity}</h5>
                                <h5>x</h5>
                                <h5>{orderItem.name}</h5>
                                
                                <h5>{orderItem.item.price}</h5>
                            </div>
                        ))
                    ) : (
                        <div>No orders available</div>
                    )
                }
            </h4>
            <h4>{customerTotalPrice}</h4>
        </div>
    )
}