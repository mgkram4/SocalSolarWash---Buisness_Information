import React from "react";
import Footer from "../components/Footer";

const SolarPanelBenefits = () => {
  return (
    <div>
      <ol className="mx-8 relative border-l border-gray-200">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <h3 className="text-lg font-semibold text-gray-900">
            Improved Efficiency
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            Dust, dirt, bird droppings, and other debris can accumulate on the
            surface of solar panels over time, reducing their efficiency. A
            layer of dirt can block sunlight and hinder the panels from
            generating their maximum output. Regular cleaning helps maintain
            peak efficiency, ensuring that the panels can produce as much energy
            as possible.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <h3 className="text-lg font-semibold text-gray-900">
            Enhanced Longevity
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            Keeping solar panels clean also extends their lifespan. Accumulated
            dirt and debris can lead to corrosion and other forms of damage,
            which may significantly reduce the panels' useful life. Regular
            cleaning prevents this and allows the solar panels to continue
            functioning effectively for many years.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <h3 className="text-lg font-semibold text-gray-900">Cost Savings</h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            Clean solar panels generate more electricity, which means you can
            save more on your energy bills. When the panels are operating at
            peak efficiency, you can produce more energy without needing
            additional panels, thereby maximizing your return on investment.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <h3 className="text-lg font-semibold text-gray-900">
            Safeguarding Your Investment
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            Solar panels are a significant financial investment, and you want to
            protect that investment. Regular cleaning helps avoid potential
            damage caused by debris, weather conditions, or other external
            factors that could harm the panels.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <h3 className="text-lg font-semibold text-gray-900">
            Professional Approach
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            While it's possible to clean solar panels yourself, professional
            solar cleaning services are often recommended for several reasons.
            Experts have the right equipment, training, and expertise to clean
            the panels effectively without causing any damage.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <h3 className="text-lg font-semibold text-gray-900">
            Safety Considerations
          </h3>
          <p className="text-base font-normal text-gray-500">
            Solar panels are typically installed on rooftops or elevated
            structures. Cleaning them without proper safety equipment and
            training can be risky. Professional solar cleaning companies have
            the necessary safety measures in place to handle the task safely.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <h3 className="text-lg font-semibold text-gray-900">
            Environmental Benefits
          </h3>
          <p className="text-base font-normal text-gray-500">
            Solar energy is already an environmentally friendly choice for power
            generation. By keeping solar panels clean and operating at their
            best, you can further reduce your carbon footprint and contribute to
            a cleaner environment.
          </p>
        </li>
      </ol>
      <Footer />
    </div>
  );
};

export default SolarPanelBenefits;
