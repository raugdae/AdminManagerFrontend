import {useState,useEffect} from 'react'
import {fetchAllEvents} from '../../../api/event'
import EventCard from './eventCard'




function EventList(){

    const [event, setEvent] = useState([])
    

    useEffect(() => {
        const fetchEvents = async () => 
            { 
            const response = await fetchAllEvents()
            setEvent(response.data)
            }
    fetchEvents()},[])
    

    return (
    <div className='flex flex-row h-96 w-auto bg-pink-500 border-4 border-black '>
        {
        event.map(event => 
        <EventCard key={event.id} event_name={event.event_name} event_date={event.start_date} />)}
        
    </div>
    )

}
export default EventList