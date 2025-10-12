const createOption = (arrayOption = []) => {
    console.log(arrayOption)
    return (arrayOption.map((item) => (<option value={item.id}>{item.value}</option>)))

}


function Dropdown({dbTable,objectArray,value,onChange}){
    return (
        <select className="rounded-2xl bg-white h-8 w-60 text-center" name={dbTable} id={dbTable} value={value} onChange={onChange}>
            {createOption(objectArray)}
        </select>
    )
}
export default Dropdown