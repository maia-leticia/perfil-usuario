function InputField({label, name, value, onChange, disabled}){
    return(
        <div className="flex flex-col md:flex-row  md:items-center justify-start md:pl-[24px]">
            <label htmlFor={name} className="font-semibold w-[9vw] mr-[15px]" >{label}:</label>
            <input type="text" name={name} value={value} onChange={onChange} disabled={disabled} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${!disabled ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`}  />                    
        </div>
    )
}


export default InputField
