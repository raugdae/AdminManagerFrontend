import {useState,useEffect} from 'react'
import {fetchAllEvents} from '../../api/event'
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
    <div>
        <h1>Evenements</h1>
        {
        event.map(event => 
        <EventCard key={event.id} event_name={event.event_name} event_date={event.start_date} />)}
        
    </div>
    )

}
export default EventList