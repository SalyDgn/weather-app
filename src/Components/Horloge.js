import React from "react";
import { useState, useEffect } from "react";

const Horloge = () => {
  const [date, setDate] = useState("");
  const [hours, setHour] = useState("");

  // Utilise useEffect pour définir l'intervalle de mise à jour
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID); // Nettoyage de l'intervalle lors du démontage du composant
  }, []);

  const tick = () => {
    var now = new Date();
    const annee = now.getFullYear();
    const jour = now.getDate();
    const heure = now.getHours();
    const minute = now.getUTCMinutes();
    const j = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setDate(
      `${j[now.getDay()]}, ${jour} ${monthNames[now.getMonth()]} ${annee}`
    );
    setHour(
      `${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    );
  };

  return (
    <>
      <div>{date}</div>
      <div className="text-center hour">{hours}</div>
    </>
  );
};

export default Horloge;
