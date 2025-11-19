import profileIcon from "@/../public/images/profile.svg";
import Image from "next/image";

export default function Cabinet() {
    return (
        <>
            <div className="text-black flex flex-col items-center justify-center gap-2">
                <h1 className="font-extrabold text-2xl mt-10 mb-4">Личный кабинет</h1>
                <div className="flex flex-row gap-50">
                    <div className="flex flex-row items-center justify-center gap-4 my-2">
                        <Image src={profileIcon} alt="" className="scale-200"/>
                        <div className="font-medium text-lg">Логин: login</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold">Информация о профиле</h1>
                        <div>Почта: pochta</div>
                        <div>Телефон: nomer</div>
                    </div>
                </div>
            </div>
        </>
    );
}