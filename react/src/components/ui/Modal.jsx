import {X} from 'lucide-react'

function Modal({onClose,isOpen,children}){
    if (!isOpen) return null;

    return(
        <div onClick={onClose} className='fixed inset-0 bg-black/50 flex item-center justify-center align-middle '>
            <div onClick={(e) => e.stopPropagation()} className='p-4 mt-12 mx-4 relative w-full sm:w-full md:w-full lg:w-3/4 xl:w-1/2 2xl:w-max-3/5'>
                <div className='flex flex-col w-full h-full'>
                    {children}
                </div>
            </div>
        </div>
    )


}
export default Modal;