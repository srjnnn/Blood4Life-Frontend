import React from 'react'

export default function Nav() {
    const navItems = [
    { icon: "./dashboard/blood.png", label: "Blood donor" },
    { icon: "./dashboard/event.png", label: "Event" },
    { icon: "./dashboard/home.png", label: "Home", active: true },
    { icon: "./dashboard/donate.png", label: "Donate" },
    { icon: "./dashboard/user.png", label: "User" },
  ];
  return (<>
    <nav className="fixed bottom-0 w-full h-12">
        {/* Bottom navigation bar background */}
        <div className="w-full h-12 bg-white rounded-b-2" />

        {/* Navigation icons */}
        <div className="absolute top-0 w-full flex justify-around items-end h-full pb-3">
          {navItems.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {item.active && (
                <div className="absolute -top-3 w-14 h-[53px] bg-[#d27e7e] rounded-[28px/26.5px] z-0" />
              )}
              <div className={`relative z-10 text-2xl ${item.active ? "mb-4" : "pt-1"}`}>
                <img src={item.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}

