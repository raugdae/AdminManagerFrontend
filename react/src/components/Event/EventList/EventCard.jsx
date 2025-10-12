export default function EventCard({ event_name, event_date }) {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-purple-700 h-auto border-emerald-950 border-4 p-4">
      <div className="bg-gradient-to-t from-indigo-900 to-purple-400 shadow-2xs text-white text-3xl border-indigo-400 border-2 text-center">
        {event_name}
      </div>
      <div>EVENT DATE : {event_date}'</div>
    </div>
  );
}
