
import tempMap from "../../../public/images/temp_map.png"
import { GoogleMap,
        useJsApiLoader,
        Marker,
        InfoWindow,
    } from '@react-google-maps/api';

 //Test API Key Non Functional

class OfficeNode{

    constructor(
        id, 
        field_address, 
        locality, 
        postalCode, 
        address_line1, 
        address_line2, 
        latitude, 
        longitude)

    {
        this.id = id,
        this.field_address = field_address,
        this.field_address.locality = locality,
        this.field_address.postal_Code = postalCode,
        this.field_address.address_line1 = address_line1,
        this.field_address.address_line2 = address_line2,
        this.field_address.latitude = latitude,
        this.field_address.longitue = longitude
    }


}

export default function GoogleMapComponent()
{
    
   const offices = [
    {
        
    }
   ]

    return(
        <div>
            <iframe

            style={
                {width:'600',
                height:'450',
                style:'border:0',
                loading:'lazy',
                allowfullscreen:'',
                referrerpolicy:'no-referrer-when-downgrade',
                src:`https://www.google.com/maps/embed/v1/place?key=AIzaSyDzqxhDkLPVw1HnqksTIP5fcBJKXAL3bU8
                &q=Space+Needle,Seattle+WA`}
            }>
            </iframe>
        </div>
    )
  
}