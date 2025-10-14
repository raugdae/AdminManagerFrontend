import {Trash2, Pen} from 'lucide-react'
import {useState,useEffect} from 'react'
import { getEventGroups,deleteEventGroup } from '../../api/event';


function EventGroups() {
  const [dataset,setDataset] = useState([]);
   
  
    useEffect(() => {
      const fetchData = async () => {
        const result =  await getEventGroups(localStorage.getItem('eventID'));
        setDataset(result.data)
      };
      fetchData();
    }, []);
  
  
  if (dataset.length <= 0) {
    return <div> no data to display </div>;
  }
    
console.log(dataset)
  const handleDelete = async (item) => {
    console.log('Supprimer cet item :', item);
    try {
    await deleteEventGroup(localStorage.getItem('eventID'),item.id)
  }
  catch(err){
    console.log("Error", err, "message",err.message);
  }
  }

  const handleEdit = (item) => {
    console.log('Éditer cet item :', item);
  }

  return (
    <div className="flex flex-col m-4">
      {dataset.length > 0 && (
        <div className="flex flex-row m-4 justify-around bg-gray-100 rounded">
          {Object.keys(dataset[0]).map((key, index) => (
            <div key={index} className="font-bold flex-1 text-center">
              {key}
            </div>
          ))}
          <div className="font-bold w-24 text-center">Actions</div>
        </div>
      )}
   
      {dataset.map((item, index) => (
        <div key={index} className="flex flex-row m-2 justify-around border-b items-center">
          {Object.values(item).map((value, i) => (
            <div key={i} className="flex-1 text-center">
              {value}
            </div>
          ))}
          <div className="flex gap-2">
            
              <div 
                className='border-2 p-2 bg-orange-500 hover:bg-green-500 cursor-pointer rounded' 
                onClick={() => handleEdit(item)}
              >
                <Pen size={18} />
              </div>
            
            
              <div 
                className='border-2 p-2 hover:bg-red-500 cursor-pointer rounded'
                onClick={() => handleDelete(item)}
              >
                <Trash2 size={18} />
              </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventGroups