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

function handleChange(e){
    const{name, value} = e.target
    setUser(prev => ({
        ...prev,
        [name]: value
    }))
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
                    <img src={IconProfile} alt="profile-icon" className="rounded-full  w-[100px] lg:w-[160px] h-[100px] lg:h-[160px] object-cover"/>
                    <h1 className="hidden md:block text-[40px]">Meu Perfil</h1>
                </div>
                <img src={EditPencil} alt="" onClick={()=>setIsEditing(true)} className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer" />
            </div>
            <div className="flex flex-col gap-[10px] text-[15px] lg:text-[24px]">
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_name" className="font-semibold w-[9vw]" >Nome:</label>
                    <input type="text" name="user_name" value={user.user_name} onChange={handleChange} disabled={!isEditing} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`}  />                     
                </div>
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_age" className="font-semibold w-[9vw]">Idade:</label>
                    <input type="text" name="user_age" value={user.user_age} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`}  />
                </div>
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_street" className="font-semibold w-[9vw]" >Rua:</label>
                    <input type="text" name="user_street" value={user.user_street} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`} />       
                </div>
                <div className="flex items-center justify-start pl-[24px]">
                    <label htmlFor="user_neighborhood" className="font-semibold w-[9vw]" >Bairro:</label>
                    <input type="text" name="user_neighborhood" value={user.user_neighborhood} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`} />
                </div>
                <div className="flex items-center justify-start pl-[24px] ">
                    <label htmlFor="user_city" className="font-semibold w-[9vw]" >Cidade:</label>
                    <input type="text" name="user_city" value={user.user_city} className={`flex flex-1 h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] p-2 focus:outline-none ${isEditing ? "border border-[#1A1A1A]" : "text-[#4B5563]"}`} />          
                </div>
                <div className={`flex flex-col h-[150px] mt-[15px] mb-2 px-[24px] py-[10px] rounded-[28px] ${isEditing ? "border-[#1A1A1A] border" : ""}`}>
                    <label htmlFor="user_bio" className="font-semibold mb-[5px]" >Biografia:</label>         
                    <textarea name="user_bio" value={user.user_bio} id="" className={`flex flex-1 h-[100%] resize-none focus:outline-none ${isEditing ? "" : "text-[#4B5563]"}`}></textarea>
                </div>
                <div className="flex justify-end gap-4">
                    <button className="w-[18vw] cursor-pointer md:h-[48px] h-[35px]  text-[#FFFFFF] rounded-[40px] bg-[#FF0000]">Cancelar</button>
                    <button className="w-[18vw] cursor-pointer md:h-[48px] h-[35px] text-[#FFFFFF] rounded-[40px] bg-[#1AABF4]">Salvar</button>
                </div>
            </div>
        </form>
    )
}
export default Profile