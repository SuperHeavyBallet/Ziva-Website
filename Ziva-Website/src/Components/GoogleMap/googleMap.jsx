
import tempMap from "../../../public/images/temp_map.png"
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDzqxhDkLPVw1HnqksTIP5fcBJKXAL3bU8
&q=Space+Needle,Seattle+WA`;

export default function GoogleMapComponent()
{
    
   

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