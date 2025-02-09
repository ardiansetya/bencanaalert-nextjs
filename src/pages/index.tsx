"use client";

import Head from "next/head";
import { useState } from "react";
import { AlertTriangle, Info, Thermometer, Droplets, Wind } from "lucide-react";
import { Header } from "@/components/Header";

export default function Home() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "warning", message: "Potential flooding in coastal areas" },
    {
      id: 2,
      type: "info",
      message: "Moderate rainfall expected in the next 24 hours",
    },
  ]);

  const [weatherData, setWeatherData] = useState({
    temperature: 28,
    humidity: 75,
    windSpeed: 15,
  });

  return (
    <div>
      <Header/>
      <Head>
        <title>Bencana Alert Dashboard</title>
        <meta name="description" content="Dashboard for Bencana Alert system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Temperature</h2>
          <div className="flex items-center">
            <Thermometer className="text-red-500 mr-2" />
            <span className="text-2xl">{weatherData.temperature}°C</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Humidity</h2>
          <div className="flex items-center">
            <Droplets className="text-blue-500 mr-2" />
            <span className="text-2xl">{weatherData.humidity}%</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Wind Speed</h2>
          <div className="flex items-center">
            <Wind className="text-gray-500 mr-2" />
            <span className="text-2xl">{weatherData.windSpeed} km/h</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Active Alerts</h2>
      <div className="grid gap-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg flex items-center ${
              alert.type === "warning" ? "bg-yellow-100" : "bg-blue-100"
            }`}>
            {alert.type === "warning" ? (
              <AlertTriangle className="text-yellow-700 mr-3" />
            ) : (
              <Info className="text-blue-700 mr-3" />
            )}
            <span
              className={
                alert.type === "warning" ? "text-yellow-700" : "text-blue-700"
              }>
              {alert.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
