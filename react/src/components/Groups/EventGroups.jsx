import {Trash2, Pen} from 'lucide-react'
import {useState,useEffect} from 'react'
import { getEventGroups,deleteEventGroup } from '../../api/event';
import Modal from '../ui/Modal'


function EventGroups() {
  const [dataset,setDataset] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem,setSelectedItem ] =useState(null);
   
  
    useEffect(() => {
      fetchData();
      
    }, []);
  
  
  if (dataset.length <= 0) {
    return <div> no data to display </div>;
  }

  const fetchData = async () => {
        const result =  await getEventGroups(localStorage.getItem('eventID'));
        setDataset(result.data)
      };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };


    

  const handleDelete = async (item) => {
    console.log('Supprimer cet item :', item);
    try {
    await deleteEventGroup(localStorage.getItem('eventID'),item.id)
  }
  catch(err){
    console.log("Error", err, "message",err.message);
  }
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
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="Éditer le groupe"
      >
        {selectedItem && (
          <div className="space-y-4">
            {Object.keys(selectedItem).map((key) => {
              if (key !== 'id'){
              return (<div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {key}
                </label>
                <input
                  type="text"
                  value={selectedItem[key]}
                  onChange={(e) => setSelectedItem({
                    ...selectedItem,
                    [key]: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>)}
            })}
            <div className="flex gap-2 justify-end mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Annuler
              </button>
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default EventGroups