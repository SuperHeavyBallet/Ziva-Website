import styles from "./button.module.css"

export default function Button( {buttonText, buttonFunction})
{
    return(
        <button
            onClick={buttonFunction}> 
                {buttonText}
        </button>
    )
}