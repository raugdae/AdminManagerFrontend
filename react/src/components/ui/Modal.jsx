import {X} from 'lucide-react'

function Modal({onClose,isOpen,children}){
    if (!isOpen) return null;

    return(
        <div onClick={onClose} className='fixed inset-0 bg-black flex item-center justify-center align-middle'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white p-4  max-w-md w-full mx-4 relative h-1/2'>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )


}
export default Modal;