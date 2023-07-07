import { useEffect, useState } from "react";
import { PiMoonDuotone } from "react-icons/pi";
import { BiSun } from "react-icons/bi";

const DarkLightToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div onClick={handleThemeToggle} className="cursor-pointer group">
      <div className="group-hover:bg-blue-100/20 h-10 w-10 flex justify-center items-center rounded-full text-blue-300">
        {theme === "dark" ? <BiSun size={25} /> : <PiMoonDuotone size={25} />}
      </div>
    </div>
  );
};

export default DarkLightToggle;
