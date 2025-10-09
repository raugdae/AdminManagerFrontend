import '../../styles/components/EventCard.css'

export default function EventCard({event_name,event_date}){
    return (
        <div className='div-EventCard'>
            <div className='div-EventCard-title'>EVENT NAME : {event_name}</div>
            <div>EVENT DATE : {event_date}'</div>
        </div>
    )
}