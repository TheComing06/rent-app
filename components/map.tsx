"use client";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactifiedModule } from "@yandex/ymaps3-types/reactify/reactify";
import { LOCATION } from "../variables";

type ReactifiedApi = ReactifiedModule<typeof ymaps3>;

const Map = () => {
  const [reactifiedApi, setReactifiedApi] = React.useState<ReactifiedApi>();

  React.useEffect(() => {
    Promise.all([ymaps3.import("@yandex/ymaps3-reactify"), ymaps3.ready]).then(
      ([{ reactify }]) =>
        setReactifiedApi(reactify.bindTo(React, ReactDOM).module(ymaps3))
    );
    // const script = document.createElement("script");
    // script.src = `https://api-maps.yandex.ru/v3/?apikey=${process.env.YANDEX_API_KEY}&lang=ru_RU`;
    // script.async = true;
    // script.onload = () => {
    //   // Теперь ymaps3 определён
    //   Promise.all([
    //     ymaps3.import("@yandex/ymaps3-reactify"),
    //     ymaps3.ready,
    //   ]).then(([{ reactify }]) =>
    //     setReactifiedApi(reactify.bindTo(React, ReactDOM).module(ymaps3))
    //   );
    // };
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  if (!reactifiedApi) {
    return null;
  }

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    reactifiedApi;

  return (
    <YMap location={LOCATION}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
    </YMap>
  );
};

export default Map;
