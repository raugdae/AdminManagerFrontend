

function Input({ label, type = 'text', value, onChange, placeholder, required = false, divClass = "flex flex-row p-3 border-b-black border-b-2 ml-10",labelClass='w-1/4',inputClass=`bg-zinc-500 border-2 rounded-l max-h-8` }) {

 

  return (
    <div className={divClass}>
      <label className={labelClass}>{label}</label>
      <input className={inputClass}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default Input