import Dropdown from '../ui/Dropdown'
import Button from '../ui/Button'
import {useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {fetchAllEvents} from '../../api/event'

function PickEvent({children}){
    const [eventList,setEventList] = useState([])
    const [selectedEvent,setSelectedEvent] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
            const fetchEvents = async () => 
                { 
                const response = await fetchAllEvents()
                setEventList(response.data.map(item => ({id:item.id,value:item.event_name})))
                
                }
        fetchEvents()},[]);

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("eventID",selectedEvent)
        navigate("/admin/")

    }

    const handleEventChange = (e) =>{
        setSelectedEvent(e.target.value);
    }

    return (
        <div className='flex justify-center m-4 p-4 bg-cyan-600 shadow-2xl rounded-sm'>
        <form onSubmit={handleSubmit}>
            <Dropdown dbTable="tevent" objectArray={eventList} value={selectedEvent} onChange={handleEventChange}/>
            <Button type='submit'>Sélectionner</Button> 
        </form>

        {children}
        </div>
    )
}
export default PickEvent