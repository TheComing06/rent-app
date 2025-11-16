import Link from "next/link";

export default function Auth() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-black font-extrabold text-2xl mt-10 mb-4">Авторизация</h1>
        <div className="flex flex-col gap-3">
          <input placeholder="Логин" type="text" className="shadow rounded-md bg-neutral-200 text-black font-normal text-base w-auto h-auto px-1.5"/>
          <input placeholder="Пароль" type="password" className="shadow rounded-md bg-neutral-200 text-black font-normal text-base w-auto h-auto px-1.5"/>
        </div>
        <button className="text-black rounded-md font-bold bg-neutral-100 shadow hover:bg-neutral-300 px-3.5 py-1.5 transform hover:scale-125 duration-200 transition ease-in-out">Авторизоваться</button>
        <Link href="/register">Зарегистрироваться</Link>
      </div>
    </>
  );
}
