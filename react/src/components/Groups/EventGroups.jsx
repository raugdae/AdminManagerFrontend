import { Trash2, Pen,X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getEventGroups, deleteEventGroup, updateEventGroup } from '../../api/event';
import Modal from '../ui/Modal'


function EventGroups() {
  const [dataset, setDataset] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null);

  const fetchData = async () => {
    const result = await getEventGroups(localStorage.getItem('eventID'));
    await setDataset(result.data)

  };


  useEffect(() => {
    fetchData();

  }, []);


  if (dataset.length <= 0) {
    return <div> no data to display </div>;
  }



  const handleEdit = async (item, modalType) => {
    await setSelectedItem(item);
    await setModalType(modalType)
    console.log(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    //setSelectedItem(null);
  };

  const handleGroupEditChange = async () => {
    console.log('Update groupe modificaitons', selectedItem);

    //const data = {groupe:e.groupe,parentid:e.id}

    const response = await updateEventGroup(localStorage.getItem('eventID'), selectedItem.id, selectedItem);
    setIsModalOpen(false)

  }


  const handleDelete = async (item) => {
    console.log('Supprimer cet item :', item);
    try {
      await deleteEventGroup(localStorage.getItem('eventID'), item.id)
    }
    catch (err) {
      console.log("Error", err, "message", err.message);
    }
  }

  const handleAdd = async(modalType) => {
    await setModalType(modalType);
    setIsModalOpen(true);
  }




  return (
    <div className="flex flex-col m-4">
      <div className='flex justify-center '>
      <button className='border-lime-800 border-4 bg-emerald-700 hover:bg-green-300 ' onClick={()=>handleAdd('Add')}>Ajouter un groupe</button>
      </div>
      {dataset.length > 0 && (
        <div className="flex flex-row m-4 justify-around bg-gray-100 rounded">
          {Object.keys(dataset[0]).map((key, index) => {

            if (key !== 'id' && key !== 'fk_parentgroupid') {
              return (
                <div key={index} className="font-bold flex-1 text-center">
                  {key}
                </div>
              )
            }

          })}
          <div className="font-bold w-24 text-center">Actions</div>
        </div>
      )}

      {dataset.map((item, index) => (
        <div key={index} className="flex flex-row m-2 justify-around border-b items-center">
          {Object.values(item).map((value, i) => {


            if (Object.keys(item)[i] !== 'id' && Object.keys(item)[i] !== 'fk_parentgroupid')
              return (
                <div key={i} value={value} className="flex-1 text-center">
                  {value}
                </div>)
          })}
          <div className="flex gap-2">

            <div
              className='border-2 p-2 bg-orange-500 hover:bg-green-500 cursor-pointer rounded'
              onClick={() => handleEdit(item, 'Edit')}
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
        
      >
        {modalType === 'Edit' && (
          <div>
          <div className='flex justify-between item-center mb-4 bg-violet-400'>
                    <div className="flex font-extrabold p-4"><h2 className='font-normal p-4 align-middle
                    75'>Modifier le groupe </h2> {selectedItem.groupe}</div>
                    <button onClick={closeModal} className='text-gray-500 hover:text-red-700 transition-colors'><X/></button>
                </div>
          <div className="space-y-4">
            {Object.keys(selectedItem).map((key) => {
              if (key === 'groupe') {
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
                </div>)
              }
              if (key === 'parent') {
                return (<div>
                  <div className='block text-sm text-gray-700 mb-1'>
                    <h2>Parent</h2>
                  </div>
                  <select className='rounded-2xl, bg-cyan-300 border-2' onChange={(e) => {
                    console.log(key
                    )
                    setSelectedItem({
                      ...selectedItem,
                      fk_parentgroupid: e.target.value
                    })
                  }}>
                    {dataset.map((item, index) => {

                      if (item.groupe !== selectedItem.groupe)
                        return <option
                          key={index} className='bg-green-400 ' value={item.id}>{item.groupe}</option>

                    })}
                  </select>
                </div>)
              }

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
                onClick={handleGroupEditChange}
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
        )

        }
        {
        modalType === 'Add' && (
        <div className='flex flex-col'>
          <h2 className='justify-center'>Ajouter</h2>
        </div>
        )

        }
      </Modal>
    </div>
  );
}

export default EventGroups