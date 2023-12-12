import { useTitle } from "@/hooks/useTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faGraduationCap,
  faFolderOpen,
  faUserTimes,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Bar, Line } from "react-chartjs-2";
import sourceData from "../pages/data/sourceData.json";
import lineData from "../pages/data/revenueData.json";

const titleColor = "#FFFFFF";
const primaryColor = "#5CF4F4";
const secondaryColor = "#CCFC04";
const tertiaryColor = "#FFEC44";
const quaternaryColor = "#FF2F54";

const MENU_ITEMS = [
  {
    name: "Estudiantes",
    icon: <FontAwesomeIcon icon={faGraduationCap} size="2x" />,
    value: 1600,
  },
  {
    name: "Estudiantes con comedor",
    icon: <FontAwesomeIcon icon={faUtensils} size="2x" />,
    value: 800,
  },
  {
    name: "Estudiantes Denegados",
    icon: <FontAwesomeIcon icon={faUserTimes} size="2x" />,
    value: 300,
  },
  {
    name: "Estudiantes prioritarios",
    icon: <FontAwesomeIcon icon={faFolderOpen} size="2x" />,
    value: 400,
  },
];

export function HomePage() {
  useTitle("Inicio");
  const [counts, setCounts] = useState(MENU_ITEMS.map(() => 0));

  const startCounting = () => {
    const targetValues = MENU_ITEMS.map((item) => item.value);
    const step = targetValues.map((value) => value / 100);

    let currentValues = counts.slice();

    const countIntervals = targetValues.map((targetValue, index) =>
      setInterval(() => {
        currentValues[index] += step[index];
        setCounts([...currentValues]);

        if (currentValues[index] >= targetValue) {
          clearInterval(countIntervals[index]);
        }
      }, 20)
    );
  };

  useEffect(() => {
    startCounting();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl mb-4">Dashboard</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {MENU_ITEMS.map((item, index) => (
          <div
            className={`bg-blue-500 p-4 text-white pt-14 relative z-${item.value} rounded-lg`}
            key={item.name}
          >
            <div className="absolute top-0 right-0 m-4">{item.icon}</div>
            <p className="mb-2 font-bold text-2xl">
              {Math.round(counts[index])}
            </p>
            <p className="mt-2">{item.name}</p>
            <div
              className={`border-t-4 border-${
                (index % 4) + 1
              }-500 w-24 mt-2 rounded`}
            ></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="dataCard revenueCard bg-background shadow-none border w-full">
          <Line
            data={{
              labels: lineData.map((data) => data.label),
              datasets: [
                {
                  label: "dato1",
                  data: lineData.map((data) => data.data1),
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                },
                {
                  label: "dato2",
                  data: lineData.map((data) => data.data2),
                  backgroundColor: secondaryColor,
                  borderColor: secondaryColor,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Gráfico de líneas",
                },
              },
            }}
          />
        </div>

        <div className="dataCard customerCard bg-background shadow-none border w-full">
          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Cantidad",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    primaryColor,
                    secondaryColor,
                    tertiaryColor,
                    quaternaryColor,
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Gráfico de barras",
                },
              },
            }}
          />
        </div>
      </div>
      <footer className=" p-4 mt-12">
        <p className="text-gray-500 flex justify-between">
          <span>&copy; Sistema Venta de Ticket || {new Date().getFullYear()} Controlz</span>
          <span>Versión 2.0</span>
        </p>
      </footer>
    </div>
  );
}
