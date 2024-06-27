import profile from "@/assets/profil.png"


import { Notification } from "./Icons";

const Header = () => {
    const user = {
        name: "Alex",
        surname: "Pierierodov"
    }

    return (
        <header className=' flex justify-between items-center gap-6'>
            <div className="">
                <h1 className="title mb-2">Hi, {user.name} {user.surname}</h1>
                <p className='text'>Let's finish your task today!</p>
            </div>
            <div className="flex items-center gap-6">
                <button className="rounded-full w-[52px] h-[52px] border border-solid border-[F5F5F7] flex justify-center items-center">
                    <Notification/>
                </button>
                <button>
                    <img src={profile} alt="" />
                </button>
            </div>
        </header>
    )
}

export default Header