import { Trash2, Pen, X } from 'lucide-react'
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

  const handleEdit = async (item, modalType) => {
    await setSelectedItem(item);
    await setModalType(modalType)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    //setSelectedItem(null);
  };

  const handleGroupEditChange = async () => {

    await updateEventGroup(localStorage.getItem('eventID'), selectedItem.id, selectedItem);

    fetchData();
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

  const handleAdd = async (modalType) => {
    await setModalType(modalType);
    setIsModalOpen(true);
  }




  return (
    <div className="flex flex-col m-4">
      <div className='flex justify-center '>
        <button className='border-lime-800 border-4 bg-emerald-700 hover:bg-green-300 ' onClick={() => handleAdd('Add')}>Ajouter un groupe</button>
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
          <div className="flex flex-col bg-gradient-to-b from-emerald-500 to-emerald-900">
            <div className='relative flex justify-between items-center'>
              <div className='absolute bg-gradient-to-br from-white/40 to-transparent pointer-events-none h-full w-full rounded-b-lg'></div>
              <div className="font-extrabold ml-4"><h2>
                Modifier le groupe <b>{selectedItem.groupe} </b></h2> </div>
              <button onClick={closeModal} className='text-gray-500 hover:text-red-700 transition-colors m-4'><X /></button>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              {Object.keys(selectedItem).map((key) => {
                if (key === 'groupe') {
                  return (<div key={key} className='relative flex flex-col m-4'>
                    <div className='absolute bg-gradient-to-br from-white/40 to-transparent pointer-events-none h-full w-full rounded-t-xl'></div>
                    <label className="block text-sm font-medium z-10 text-black/90 ml-4 mb-1 pt-1">
                      Nom du groupe
                    </label>
                    <input
                      type="text"
                      value={selectedItem[key]}
                      onChange={(e) => setSelectedItem({
                        ...selectedItem,
                        [key]: e.target.value
                      })}
                      className="w-full px-3 py-2 border bg-zinc-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>)
                }
                if (key === 'parent') {
                  return (<div className='m-4 relative flex flex-col'>
                    <div className='absolute bg-gradient-to-br from-white/40 to-transparent pointer-events-none h-full w-full rounded-t-xl'></div>
                    <div className='block text-sm text-black z-10 w-full ml-4 mb-1 pt-1'>
                      <h2>Parent</h2>
                    </div>
                    <select className='bg-zinc-200 border-2 px-3 py-2' defaultValue={selectedItem.key} onChange={(e) => {
                      setSelectedItem({
                        ...selectedItem,
                        fk_parentgroupid: e.target.value
                      })
                    }}>
                      {dataset.map((item, index) => {

                        if (item.groupe !== selectedItem.groupe)
                          return <option
                            key={index} value={item.id}>{item.groupe}</option>

                      })}
                      
                    </select>
                  </div>)
                }

              })}

              <div className="flex gap-2 justify-end mb-4 mr-4">
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
            <div className='flex flex-col bg-gradient-to-b from-emerald-700 to-emerald-900'>
              <div className='flex justify-between items-center relative'>
                <div className='absolute bg-gradient-to-br from-white/40 to-transparent pointer-events-none h-full w-full'></div>
                <div className='pl-4 text-black/90 z-10'>
                  <h2 >Ajouter un groupe</h2>
                </div>
                  <button onClick={closeModal} className='text-gray-500 hover:text-red-700 transition-colors m-4'><X /></button>
              </div>
              <div className='flex justify-center p-4 w-full h-full bg-emerald-200'>
                <form>
                  <div className='flex flex-col relative gap-2'>
                    <div className='absolute bg-gradient-to-br from-white/40 to-transparent pointer-events-none w-full h-fulll'></div>
                    <label>Nom du groupe</label>
                    <input type='text' name='groupName' className="bg-zinc-100 px-3 py-2"></input>

                    <label>Groupe parent</label>
                    <select className='bg-zinc-200 w-full px-3 py-2'> 
                      {Object.values(dataset).map((value) => (
                        <option key={value.key} value={value.groupid} className='p-4'
                        >{value.groupe}</option>
                      ))}
                    </select>
                  </div>
                </form>

              </div>
            </div>
          )

        }
      </Modal>
    </div>
  );
}

export default EventGroups