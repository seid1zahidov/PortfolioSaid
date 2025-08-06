import { useEffect, useState } from "react";
import "../assets/scss/Footer/Footer.css";
import "../assets/global/global.css";
import { FaArrowTurnUp } from "react-icons/fa6";

function Footer() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const gmt = "GMT";
    const displayHour = hours % 12 || 12;

    let dayPeriod = "";
    if (hours >= 5 && hours < 12) dayPeriod = "Morning";
    else if (hours >= 12 && hours < 17) dayPeriod = "Afternoon";
    else if (hours >= 17 && hours < 21) dayPeriod = "Evening";
    else dayPeriod = "Night";

    return `${displayHour
      .toString()
      .padStart(2, "0")}:${minutes}:${seconds} ${ampm} – ${gmt} – ${dayPeriod}`;
  };

  return (
    <section className="Footer">
      <div className="Date">
        <div className="Date-line">
          <div className="Date-line__left">{formatTime(time)}</div>
          <div className="Date-line__right">
            <FaArrowTurnUp /> <FaArrowTurnUp /> <FaArrowTurnUp /> <FaArrowTurnUp />
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="slider_container">
          <div className="SLIDER scroll-text">
            <h1>CREATIVE DEVELOPER</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
