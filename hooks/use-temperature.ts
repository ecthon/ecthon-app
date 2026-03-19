import { useEffect, useState } from "react";

export function useTemperature() {
    const [temperature, setTemperature] = useState("");

    async function getWeather() {
        const res = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=-3.1&longitude=-60.0&current_weather=true"
        )

        const data = await res.json()

        setTemperature(data.current_weather.temperature)
    }

    useEffect(() => {
        setTimeout(() => getWeather(), 5000);
    }, []);

    return { temperature };
}