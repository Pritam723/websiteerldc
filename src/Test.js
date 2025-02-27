import React from "react";
import {
  FaGlobe,
  FaBolt,
  FaIndustry,
  FaWater,
  FaServer,
  FaLink,
  FaPlug,
  FaExchangeAlt,
  FaMountain,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobe className="text-blue-400 text-5xl" />,
    title: "Eastern Region Connectivity",
    description:
      "The Eastern Region is the only region connected with all other regions of India: North, West, South, and North-East, along with Nepal, Bhutan, and Bangladesh.",
  },
  {
    icon: <FaIndustry className="text-green-400 text-5xl" />,
    title: "ER Grid Power Utilities",
    description:
      "Power utilities in ER include Bihar, Jharkhand, DVC, Odisha, Sikkim, and West Bengal.",
  },
  {
    icon: <FaBolt className="text-yellow-400 text-5xl" />,
    title: "Installed Capacity",
    description:
      "Total installed capacity: 41,052 MW (10,460 MW allocated outside ER) as of 31.03.2023.",
  },
  {
    icon: <FaWater className="text-indigo-400 text-5xl" />,
    title: "Thermal, Hydro, and RES Capacity",
    description:
      "Thermal: 82%, Hydro: 15%, Renewable Energy Sources (RES): 3%.",
  },
  {
    icon: <FaServer className="text-gray-400 text-5xl" />,
    title: "ISGS",
    description: "ISGS includes NHPC (CS) and NTPC (CS).",
  },
  {
    icon: <FaLink className="text-purple-400 text-5xl" />,
    title: "ISTS Licensees",
    description: "The number of ISTS Licensees in ER: 12.",
  },
  {
    icon: <FaExchangeAlt className="text-red-400 text-5xl" />,
    title: "HVDC Links",
    description:
      "Includes Agra-Alipurdwar-Bishwand Chariyali, Talcher-Kolar, and back-to-back links at Gazuwaka, Sasaram, and Bheramara.",
  },
  {
    icon: <FaPlug className="text-orange-400 text-5xl" />,
    title: "STATCOM Installed",
    description: "Total number of STATCOM installed in ER: 4.",
  },
  {
    icon: <FaMountain className="text-teal-400 text-5xl" />,
    title: "Pump Storage Project",
    description:
      "The Purulia Pump Storage Project (PPSP) is a successful 900MW closed-loop pumped storage plant under WBSEDCL.",
  },
];

export default function ERPowerFeatures() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
        ⚡ Salient Features of ER Power System ⚡
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {feature.icon}
            <h2 className="text-2xl font-semibold mt-4 text-white">
              {feature.title}
            </h2>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
