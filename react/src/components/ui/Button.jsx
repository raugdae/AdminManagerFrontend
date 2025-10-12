import '../../index.css'

function Button({children, onClick, type = 'button', disabled = false, className = 'bg-emerald-300 border-4 border-red-300 rounded-2xl h-10 py-0.5 w-40 hover:bg-emerald-700'}){
    return (
        <button 
        type = {type}
        onClick= {onClick}
        disabled = {disabled}
        className = {className}
        >
            {children}
        </button>
    )
}

export default Button