'use client'

import Image from "next/image";
import Button from "../components/Button"
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    // Подключаем Telegram Web App
    const telegram = window.Telegram?.WebApp;
    if (telegram) {
      telegram.ready(); // Сообщаем Telegram, что приложение готово
      console.log('Пользователь:', telegram.initDataUnsafe?.user); // Данные пользователя
    }
  }, []);
   
  return (
      <div className="flex flex-col text-center h-[100vh] mt-0">
        <p className="text-8xl my-10">Meal Planner</p>
        <Button text={'Week Plan'} href={'/plan'}/>
        <Button text={'Calendar'} href={'/calendar'}/>
        <Button text={'My meals'} href={'/meals'}/>
        <Button text={'My products'} href={'/products'}/>
      </div>
  );
}
