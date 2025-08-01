import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  const navItems = [
    { icon: "./dashboard/blood.png", label: "Blood donor", path: "/request" },
    { icon: "./dashboard/event.png", label: "Event", path: "/event" },
    { icon: "./dashboard/home.png", label: "Home", path: "/home" },
    { icon: "./dashboard/donate.png", label: "Donate", path: "/donate" },
    { icon: "./dashboard/user.png", label: "User", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 w-full h-12 z-50">
      <div className="w-full h-12 bg-white rounded-b-2" />
      <div className="absolute top-0 w-full flex justify-around items-end h-full pb-3">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link key={index} to={item.path} className="relative flex flex-col items-center">
              {isActive && (
                <div className="absolute -top-3 w-14 h-[53px] bg-[#d27e7e] rounded-[28px/26.5px] z-0" />
              )}
              <div className={`relative z-10 text-2xl ${isActive ? "mb-4" : "pt-1"}`}>
                <img src={item.icon} alt={item.label} />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
