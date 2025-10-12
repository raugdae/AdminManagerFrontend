import {useState,useEffect} from 'react'
import { fetchEventData,pushEventUpdate } from '../../api/event'

import Input from '../ui/Input'
import Button from '../ui/Button'


function EditEvent({children}){
   const [eventStart,setEventStart] = useState(null)
   const [eventEnd, setEventEnd] = useState(null)
   const [eventName, setEventName] =useState(null)
   const [eventStreetName, setEventStreetName] = useState(null)
   const [eventStreetNumber, setEventStreetNumber] = useState(null)
   const [eventCity, setEventCity] = useState(null)
   const [eventZIP, setEventZIP] = useState(null)
   const [eventAPIKey, setEventAPIKey] = useState(null)

   const eventId = localStorage.getItem('eventID')
   
    
    useEffect(() => {
            const fetchData = async () => 
                { 
                const selectedEvent = localStorage.getItem('eventID')
                console.log(selectedEvent)
                const response = await fetchEventData(selectedEvent)
                setEventStart((response.data.start_date).slice(0,16))
                setEventEnd((response.data.end_date).slice(0,16))
                setEventName(response.data.event_name)
                setEventStreetName(response.data.street_name)
                setEventStreetNumber(response.data.street_number)
                setEventCity(response.data.city)
                setEventZIP(response.data.zip)
                setEventAPIKey(response.data.shop_api_key)
                

                }
        fetchData()},[])
    
        const handleSubmit = async (e) => {
            e.preventDefault()
            const queryData = {
                id:eventId,
                event_name:eventName,
                start_date:eventStart,
                end_date:eventEnd,
                street_name:eventStreetName,
                street_number:eventStreetNumber,
                city:eventCity,
                zip:eventZIP,
                shop_api_key:eventAPIKey
            }
            console.log("ready to push update ", queryData)
            await pushEventUpdate(queryData.id,queryData);
        }
        

    if (eventId === '') return <div> Choississez d'abord un évènement</div>

    return (
        <div >
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <Input label='Nom :' type = 'text' value={eventName} onChange={(e) => setEventName(e.target.value)} required/>
                <Input label='Commence le :' type ='datetime-local' value={eventStart} onChange={(e) => setEventStart(e.target.value)} required/>
                <Input label='Se termine le :' type ='datetime-local' value={eventEnd} onChange={(e) => setEventEnd(e.target.value)} required/>
                <Input label='Adresse :' type ='text' value={eventStreetName} onChange={(e) => setEventStreetName(e.target.value)} required/>
                <Input label='Numéro :' type ='text' value={eventStreetNumber} onChange={(e) => setEventStreetNumber(e.target.value)}/>
                <Input label='Code postal :' type ='text' value={eventZIP} onChange={(e) => setEventZIP(e.target.value)} required/>
                <Input label='Localité :' type ='text' value={eventCity} onChange={(e) => setEventCity(e.target.value)} required/>
                <Input label='Clé API Infomaniak (billetterie) :' type ='text' value={eventAPIKey} onChange={(e) => setEventAPIKey(e.target.value)} required/>
                
                <Button type='submit'>Modifier</Button>
            </form>
            
            {children}
        </div>
    )
}

export default EditEvent