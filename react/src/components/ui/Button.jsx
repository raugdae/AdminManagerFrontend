import '../../index.css'

function Button({children, onClick, type = 'button', disabled = false, color = 'bg-blue-400'}){
    return (
        <button 
        type = {type}
        onClick= {onClick}
        disabled = {disabled}
        className={`${color} border-4 border-red-300 rounded-2xl h-10 py-0.5 w-40 hover:bg-amber-700`}
        >
            {children}
        </button>
    )
}

export default Button