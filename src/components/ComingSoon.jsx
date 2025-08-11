import React, { useState, useEffect } from "react";

export default function ComingSoon() {
  const launchDate = new Date("2025-12-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-400",
    "text-purple-500",
    "text-pink-500",
    "text-orange-400",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = String(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 0);

    return () => clearInterval(timer);
  }, []);

  // Color changing logic
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 animate-bounce delay-100 ${colors[colorIndex]}`}
      >
        Coming Soon
      </h1>
      <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200 text-center">
        I'll launch this when I get the job!
      </p>

      <div className="flex space-x-4 md:space-x-8 animate-fade-in-up delay-300">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="px-4 py-3 rounded-lg text-center shadow-md"
          >
            <p className={`text-3xl font-bold text-blue-800`}>{value}</p>
            <p className="text-sm text-gray-600 capitalize">{label}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 font-medium text-blue-800 animate-fade-in-up delay-500">
        Hell nah, Just kidding. I have no idea to do this.
      </p>
    </div>
  );
}
