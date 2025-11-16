import * as React from "react";
import Script from "next/script";
import Map from "../../components/map";

export default function Home() {
  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.YANDEX_API_KEY}&lang=ru_RU`}
        strategy="beforeInteractive"
      />
      <div className="h-150 w-300 flex flex-row items-center justify-center mx-auto my-8">
        <Map />
      </div>
    </>
  );
}
