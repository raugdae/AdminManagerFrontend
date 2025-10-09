export default function EventCard ({event_name,start_date}){

    return (
        <div>
            <h1>Nom de l'évènement :{event_name}</h1>
            <p>à lieu le : {start_date}</p>
        </div>
    )

}
