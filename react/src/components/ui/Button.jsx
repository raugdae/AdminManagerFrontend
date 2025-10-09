import '../../styles/components/Button.css'

function Button({children, onClick, type = 'button', disabled = false, variant = 'primary'}){
    return (
        <button
        type = {type}
        onclick= {onClick}
        disbaled = {disabled}
        className={`btn btn-${variant}`}
        >
            {children}
        </button>
    )
}

export default Button