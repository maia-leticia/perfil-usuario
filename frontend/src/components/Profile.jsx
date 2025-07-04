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
})

useEffect(()=>{
    fetch("http://localhost:3001/usuario")
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.error("Erro ao buscar usuário", err))
}, [])

    return(
        <form className="font-poppins py-[40px] pr-[42px] pl-[64px]">
            <div className="flex justify-between">
                <div className="flex items-center gap-10 mb-[20px] lg:mb-[30px]">
                    <img src={IconProfile} alt="profile-icon" className="rounded-full  w-[100px] lg:w-[160px] h-[100px] lg:h-[160px] object-cover"/>
                    <h1 className="hidden md:block text-[40px]">Meu Perfil</h1>
                </div>
                <img src={EditPencil} alt="" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer" />
            </div>
            <div className="flex flex-col gap-[10px] text-[15px] lg:text-[24px]">
                <div className="flex items-center justify-between">
                    <label htmlFor="user_name" >Nome:</label>
                    <input type="text" name="user_name" value={user.user_name} className="w-[45vw] h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] border-[2px] border-[#1A1A1A] p-2 focus:outline-none"  />                     
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor=" ">Idade:</label>
                    <input type="text" className="w-[45vw] h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] border-[2px] border-[#1A1A1A] p-2 focus:outline-none"  />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="" >Rua:</label>
                    <input type="text"  className="w-[45vw] h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] border-[2px] border-[#1A1A1A] p-2 focus:outline-none" />       
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="" >Bairro:</label>
                    <input type="text"  className="w-[45vw] h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] border-[2px] border-[#1A1A1A] p-2 focus:outline-none" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="" >Cidade:</label>
                    <input type="text" className="w-[45vw] h-[30px] lg:w-[60vw] lg:h-[35px] rounded-[45px] border-[2px] border-[#1A1A1A] p-2 focus:outline-none" />          
                </div>
                <div className="flex flex-col mt-[15px] px-[24px] py-[10px] border-[#1A1A1A] border-[2px] rounded-[28px] h-[150px]">
                    <label htmlFor="" >Biografia:</label>         
                    <textarea name="" id="" className="w-[100%] resize-none focus:outline-none"></textarea>
                </div>
                <div className="flex justify-end gap-4">
                    <button className="w-[18vw] cursor-pointer h-[48px] text-[#FFFFFF] rounded-[40px] bg-[#FF0000]">Cancelar</button>
                    <button className="w-[18vw] cursor-pointer h-[48px] text-[#FFFFFF] rounded-[40px] bg-[#1AABF4]">Salvar</button>
                </div>
            </div>
        </form>
    )
}
export default Profile