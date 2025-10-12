import {useState,useEffect} from 'react'
import {fetchEventData,getOrderFromInfomaniak} from '../../api/event'
import Input from '../ui/Input'
import Button from '../ui/Button'



function ShopManagement(){
    const eventid = localStorage.getItem('eventID');

    const [apiKey,setapiKey] = useState();
    const [orderNumber,setOrderNumber] = useState();

    


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const data = {
            apikey:apiKey,
            ordernumber:orderNumber
        }
        await getOrderFromInfomaniak(eventid,data)
    }

    useEffect(() => {
    const fetchData = async () => {
      const selectedEvent = localStorage.getItem("eventID");
      console.log(selectedEvent);
      const response = await fetchEventData(selectedEvent);
      setapiKey(response.data.shop_api_key)


    };
    fetchData();
  }, []);
            
        

    

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <Input label="Numéro d'Ordre" onChange={(e) => setOrderNumber(e.target.value)} type='text' labelClass='font-bold w-1/8' divClass='flex flex-row'/>
            <Button className={`bg-emerald-300 border-4 border-red-300 rounded-2xl h-10 py-0.5 w-40 hover:bg-emerald-700`}type='submit'>Synchroniser</Button>

           </form>
        </div>
    )
}

export default ShopManagement
