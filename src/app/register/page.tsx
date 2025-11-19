import Link from "next/link";
import React from "react";
import InputMask from "react-input-mask";

export default function Register() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-black font-extrabold text-2xl mt-10 mb-4">
          Регистрация
        </h1>
        <div className="flex flex-col gap-3 items-center justify-center">
          <input
            placeholder="Логин"
            type="text"
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
          <input
            placeholder="Имя"
            type="text"
            maxLength={100}
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
          <input
            type="text"
            placeholder="Фамилия"
            maxLength={100}
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
          <input
            type="text"
            placeholder="Отчество"
            maxLength={100}
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
          <input
            placeholder="Почта"
            type="text"
            maxLength={100}
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
          <input
            placeholder="Телефон"
            type="text"
            maxLength={30}
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
          <input
            placeholder="Пароль"
            type="password"
            maxLength={20}
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
          <input
            placeholder="Пароль повторно"
            type="password"
            className="shadow rounded-md bg-neutral-200 text-black font-medium text-base w-auto h-auto px-1.5"
          />
        </div>
        <Link
          href="/auth"
          className="text-black rounded-md font-bold bg-neutral-100 shadow hover:bg-neutral-300 px-3.5 py-1.5 transform hover:scale-125 duration-200 transition ease-in-out"
        >
          Зарегистрироваться
        </Link>
      </div>
    </>
  );
}
