// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const fetchUserData = async () => {
//   setLoading(true);

//   try {
//     const token = localStorage.getItem("access_token"); // stored after signin

//     const response = await fetch("http://localhost:5000/api/profile", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // ✅ required for dummy auth
//       },
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       console.error("Error fetching profile:", data.error);
//       setUser(null);
//     } else {
//       setUser(data);
//       localStorage.setItem("profileUser", JSON.stringify(data));
//     }
//   } catch (err) {
//     console.error("Fetch failed:", err);
//     setUser(null);
//   }

//   setLoading(false);
// };



//   const statCards = [
//   { value: user?.blood_type || "N/A", label: "Blood Type" },
//   { value: user?.donated || "00", label: "Donated" },
//   { value: user?.requested || "00", label: "Requested" },
// ];


//   const settingsOptions = [
//     {
//       icon: "./donate.png",
//       label: "Available for Donate",
//       hasSwitch: true,
//     },
//     {
//       icon: "./invite.png",
//       label: "Invite a Friend",
//     },
//     {
//       icon: "./getHelp.png",
//       label: "Get Help",
//     },
//     {
//   icon: "./logout.png",
//   label: "Log out",
//   isBold: true,
//   onClick: async () => {
//     await supabase.auth.signOut();
//     localStorage.removeItem("profileUser"); 
//     navigate("/");
//   },
// }
//   ];

//   if (loading) {
//     return <div className="text-center mt-20 text-lg">Loading profile...</div>;
//   }





//   return (
//     <div className="w-full h-dvh flex flex-col bg-white rounded-lg shadow">
//       {/* Header */}
//       <div className="w-full h-[10vh] md:h-[15vh] bg-[#c30000] text-white rounded-b-[30px] flex pt-3 justify-between px-4">
//         <button className="w-6 h-6">
//           <img src="./left.png" alt="Back" />
//         </button>
//         <h1 className="text-lg font-medium">Profile</h1>
//         <div className="w-6" />
//       </div>

//       {/* Avatar */}
//       <div className="flex justify-center mt-[-40px]">
//         {user.profileImage ? (
//           <img
//             src={user.profileImage}
//             alt="Profile"
//             className="w-24 h-24 rounded-full border-[5px] border-white object-cover"
//           />
//         ) : (
//           <div className="w-24 h-24 rounded-full border-[5px] border-white bg-[#d9d9d9] flex items-center justify-center text-2xl">
//             {user?.full_name?.[0] || "U"}
//           </div>
//         )}
//       </div>

//       {/* Info */}
//       <div className="text-center mt-2">
//         <h2 className="text-[#850000] text-xl font-medium">{user.full_name}</h2>
//         <p className="text-[#8a111166] text-xs">{user.email}</p>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between mt-4 px-4">
//         <a
//           href={`tel:${user.mobile}`}
//           className="w-[48%] h-12 bg-[#c30000b2] rounded-full flex items-center justify-center gap-2 border border-[#0000004c]"
//         >
//           <img src="./callprofile.png" alt="Call" /> <span>Call Now</span>
//         </a>
//         <button className="w-[48%] h-12 bg-white rounded-full flex items-center justify-center gap-2 border border-[#0000004c]">
//           <img src="./shareprofile.png" alt="Request" /> <span>Request</span>
//         </button>
//       </div>

//       {/* Stats */}
//       <div className="flex justify-between mt-6 px-4">
//         {statCards.map((stat, index) => (
//           <div
//             key={index}
//             className="w-[30%] h-[82px] bg-[#f6eaea] rounded-[20px] border border-[#00000033] flex flex-col items-center justify-center"
//           >
//             <div className="text-[28px] font-medium text-[#010000]">{stat.value}</div>
//             <div className="text-sm text-[#c65353b2] mt-1">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* Settings */}
//       <div className="mt-6 px-4 flex flex-col gap-4">
//         {settingsOptions.map((option, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between bg-[#f6eaea] rounded-[20px] border border-[#00000033] px-4 py-2"
//             onClick={option.onClick}
//           >
//             <div className="flex items-center gap-3">
//               <img src={option.icon} alt={option.label} />
//               <span
//                 className={`text-sm text-[#c65353b2] ${option.isBold ? "font-semibold" : ""}`}
//               >
//                 {option.label}
//               </span>
//             </div>
//             {option.hasSwitch && (
//               <input type="checkbox" className="scale-125 accent-red-500" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
  // );
// }


import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const statCards = [
  { value: user?.fullBloodType || "N/A", label: "Blood Type" },
  { value: user?.donated || "00", label: "Donated" },
  { value: user?.requested || "00", label: "Requested" },
];




const settingsOptions = [
  {
    icon: "./donate.png",
    label: "Available for Donate",
    hasSwitch: true,
  },
  {
    icon: "./invite.png",
    label: "Invite a Friend",
  },
  {
    icon: "./getHelp.png",
    label: "Get Help",
  },
  {
    icon: "./logout.png",
    label: "Log out",
    isBold: true,
    onClick: async () => {
      await supabase.auth.signOut();
      localStorage.removeItem("profileUser");
      navigate("/");
    },
  },
];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profileUser');
    window.location.href = '/signin';
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error(data.error);
          setUser({});
        }
      } catch (err) {
        console.error('Failed to fetch profile:', err);
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="w-full h-dvh flex flex-col bg-white rounded-lg shadow">
      {/* Header */}
      <div className="w-full h-[10vh] md:h-[15vh] bg-[#c30000] text-white rounded-b-[30px] flex pt-3 justify-between px-4">
        <button className="w-6 h-6">
          <img src="/left.png" alt="Back" />
        </button>
        <h1 className="text-lg font-medium">Profile</h1>
        <div className="w-6" />
      </div>

      {/* Avatar */}
      <div className="flex justify-center mt-[-40px]">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-[5px] border-white object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full border-[5px] border-white bg-[#d9d9d9] flex items-center justify-center text-2xl">
            {user?.full_name?.[0] || 'U'}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="text-center mt-2">
        <h2 className="text-[#850000] text-xl font-medium">{user.name || 'Unknown User'}</h2>
        <p className="text-[#8a111166] text-xs">{user.email || 'No email'}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4 px-4">
        <a
          href={`tel:${user.mobile || ''}`}
          className="w-[48%] h-12 bg-[#c30000b2] rounded-full flex items-center justify-center gap-2 border border-[#0000004c]"
        >
          <img src="/callprofile.png" alt="Call" /> <span>Call Now</span>
        </a>
        <button className="w-[48%] h-12 bg-white rounded-full flex items-center justify-center gap-2 border border-[#0000004c]">
          <img src="/shareprofile.png" alt="Request" /> <span>Request</span>
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-between mt-6 px-4">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="w-[30%] h-[82px] bg-[#f6eaea] rounded-[20px] border border-[#00000033] flex flex-col items-center justify-center"
          >
            <div className="text-[28px] font-medium text-[#010000]">{stat.value}</div>
            <div className="text-sm text-[#c65353b2] mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Settings */}
      <div className="mt-6 px-4 flex flex-col gap-4">
        {settingsOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#f6eaea] rounded-[20px] border border-[#00000033] px-4 py-2"
            onClick={option.onClick}
          >
            <div className="flex items-center gap-3">
              <img src={option.icon} alt={option.label} />
              <span
                className={`text-sm text-[#c65353b2] ${option.isBold ? 'font-semibold' : ''}`}
              >
                {option.label}
              </span>
            </div>
            {option.hasSwitch && (
              <input type="checkbox" className="scale-125 accent-red-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
