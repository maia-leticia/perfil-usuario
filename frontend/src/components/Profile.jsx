import IconProfile from "../assets/icon-profile.jpg"
import EditPencil from "../assets/edit.png"
import { useState, useEffect } from "react"

function Profile(){

const [user, setUser] = useState({
    user_name: "",
    user_age: "",
    user_street: "",
    user_neighborhood: "",
    user_city: "",
    user_photo_url: "",
    user_bio: "",
})

const [isEditing, setIsEditing] = useState(false)

const [message, setMessage] = useState("")

function editingMode(){
    setIsEditing(true)
    setMessage("")
}

function handleChange(e){
    const{name, value} = e.target
    setUser(prev => ({
        ...prev,
        [name]: value
    }))
}

function editPhoto(){

}

function handleCancel(){
    fetch("http://localhost:3001/usuario")
    .then(res => res.json())
    .then(data => {
        setUser(data)
        setIsEditing(false)    
    })
     .catch(err => console.error("Erro ao cancelar", err))
}


function handleSave(e){
    e.preventDefault()

    if (
        !String(user.user_name).trim() ||
        !String(user.user_age).trim() ||
        !String(user.user_street).trim() ||
        !String(user.user_neighborhood).trim() ||
        !String(user.user_city).trim() ||
        !String(user.user_bio).trim()
    ) {
        setMessage("Erro: Preencha todos os campos.")
        return
  }

    if (!user.user_name.trim() || /\d/.test(user.user_name)) {
        setMessage("Erro: O nome não pode conter números.");
        return;
    }

    if (!/^\d+$/.test(user.user_age)) {
        setMessage("Erro: A idade deve conter apenas números.");
        return ;
}

    fetch("http://localhost:3001/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("Dados salvos com sucesso!", data)
        setMessage("Dados salvos com sucesso!")
        setIsEditing(false)
    }) .catch(err=>{
        console.error("Erro ao salvar os dados!", err)
        setMessage("Erro ao salvar os dados!")
        setIsEditing(false)
    })
}


useEffect(()=>{
    fetch("http://localhost:3001/usuario")
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.error("Erro ao buscar usuário", err))
}, [])


    return(
        <form className="font-poppins py-[40px] px-[54px]" >
            <div className="flex justify-between">
                <div className="flex items-center gap-10 mb-[20px] lg:mb-[30px]">
                    <img src={user.user_photo_url || IconProfile} alt="profile-icon" className={` ${isEditing ? "hover:cursor-pointer":""} rounded-full  w-[100px] lg:w-[160px] h-[100px] lg:h-[160px] object-cover `}/>
                    <h1 className="hidden sm:block text-[40px]">Meu Perfil</h1>
                </div>
                {
                    !isEditing && (
                         <img src={EditPencil} alt="" onClick={editingMode} className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer" />
                    )
                }        
            </div>
            <div className="flex flex-col gap-[10px] text-[15px] lg:text-[24px]">
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_name" className="font-semibold w-[9vw] mr-[15px]" >Nome:</label>
                    <input type="text" name="user_name" value={user.user_name} onChange={handleChange} disabled={!isEditing} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`}  />                     
                </div>
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_age" className="font-semibold w-[9vw] mr-[15px]">Idade:</label>
                    <input type="text" name="user_age" value={user.user_age} onChange={handleChange} disabled={!isEditing} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`}  />
                </div>
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_street" className="font-semibold w-[9vw] mr-[15px]" >Rua:</label>
                    <input type="text" name="user_street" value={user.user_street} onChange={handleChange} disabled={!isEditing} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`} />       
                </div>
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_neighborhood" className="font-semibold w-[9vw] mr-[15px]" >Bairro:</label>
                    <input type="text" name="user_neighborhood" value={user.user_neighborhood} onChange={handleChange} disabled={!isEditing} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`} />
                </div>
                <div className="flex items-center justify-start pl-[24px] ">
                    <label htmlFor="user_city" className="font-semibold w-[9vw] mr-[15px]" >Cidade:</label>
                    <input type="text" name="user_city" value={user.user_city} onChange={handleChange} disabled={!isEditing} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`} />          
                </div>
                <div className={`flex flex-col h-[150px] mt-[15px] mb-2 px-[24px] py-[10px] rounded-[28px] ${isEditing ? "border-[#1A1A1A] border" : ""}`}>
                    <label htmlFor="user_bio" className="font-semibold mb-[10px]" >Biografia:</label>         
                    <textarea name="user_bio" value={user.user_bio} onChange={handleChange} disabled={!isEditing}  className={`flex flex-1 h-[100%] resize-none focus:outline-none ${isEditing ? "" : "text-[#4B5563]"}`}></textarea>
                </div>
                <div className="flex justify-between items-center">
                    <span className={`text-[12px] ${message.includes("Erro") ? "text-red-600" : "text-green-600"}`}>{message}</span>
                    {
                        isEditing && (
                            <div className="flex justify-end gap-4">
                                <button className="w-[18vw] cursor-pointer md:h-[48px] h-[35px]  text-[#FFFFFF] rounded-[40px] bg-[#FF0000]" onClick={handleCancel}>Cancelar</button>
                                <button className="w-[18vw] cursor-pointer md:h-[48px] h-[35px] text-[#FFFFFF] rounded-[40px] bg-[#1AABF4]" onClick={handleSave}>Salvar</button>
                            </div>
                    )}
                </div>
                
            </div>
        </form>
    )
}
export default Profile