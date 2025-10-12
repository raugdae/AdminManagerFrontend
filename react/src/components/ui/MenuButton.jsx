
const getSectionColor = (section) =>{
    switch(
        section){
                case 1:
                    return "bg-green-700"
                    
                case 2:
                    return "bg-sky-300"
                    
                case 3:
                    return "bg-cyan-800"
                    
                default:
                    return "bg-transparent"
            }
}

function MenuButton ({label,isActive,section,onClick,className=null}){

    return (
        <button className={
            `${isActive?"font-bold bg-violet-400 border-2 ":"hover:bg-amber-900"}
            ${getSectionColor(section)} ${className}
            `}
            onClick={onClick}>
            {label}
            </button>
    )


    }
export default MenuButton