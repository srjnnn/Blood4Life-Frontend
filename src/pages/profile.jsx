// export default function Profile() {
//   const statCards = [
//     { value: "A+", label: "Blood Type" },
//     { value: "04", label: "Donated" },
//     { value: "03", label: "Requested" },
//   ];

//   const settingsOptions = [
//     {
//       icon: "./donate.png",
//       label: "Available for Donate",
//       hasSwitch: true,
//     },
//     {
//       icon: "./invite.png",
//       label: "Invite a Friend",
//       hasSwitch: false,
//     },
//     {
//       icon: "./getHelp.png",
//       label: "Get Help",
//       hasSwitch: false,
//     },
//     {
//       icon: "./logout.png",
//       label: "Log out",
//       isBold: true,
//       hasSwitch: false,
//     },
//   ];

//   return (
//     <div className="w-full h-dvh flex flex-col bg-white rounded-lg shadow">
//       {/* Header */}
//       <div className="w-full h-[10vh] md:h-[15vh] bg-[#c30000] text-white  rounded-b-[30px] flex pt-3 justify-between">
//         <button className="w-6 h-6">
//             <img src="./left.png" alt="" />
//         </button>
//         <h1 className="text-lg font-medium h-6">Profile</h1>
//         <div className="w-6" /> {/* spacer */}
//       </div>

//       {/* Profile Avatar */}
//       <div className="flex justify-center mt-[-40px]">
//         <div className="w-25 h-25 rounded-full border-[5px] border-white bg-[#d9d9d9] flex items-center justify-center text-2xl">
//           BK
//         </div>
//       </div>

//       {/* User Info */}
//       <div className="text-center mt-2">
//         <h2 className="text-[#850000] text-xl font-medium">Bibek Kaka</h2>
//         <p className="text-[#8a111166] text-xs">bibekshresta322@gmail.com</p>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-between mt-4 px-2">
//         <button 
//         onClick={() => (window.location.href = "tel:9816030281")}
//         className="w-[48%] h-15 bg-[#c30000b2] rounded-full flex items-center justify-center gap-2 border border-[#0000004c]"
//         >
//           <img src="./callprofile.png" alt="" /> <span>Call Now</span>
//         </button>
//         <button className="w-[48%] h-15 bg-white rounded-full flex items-center justify-center gap-2 border border-[#0000004c]">
//           <img src="./shareprofile.png" alt="" /> <span>Request</span>
//         </button>
//       </div>

//       {/* Stat Cards */}
//       <div className="flex justify-between mt-6 px-2">
//         {statCards.map((stat, index) => (
//           <div
//             key={index}
//             className="w-[30%] h-[82px] bg-[#f6eaea] rounded-[20px] border border-[#00000033] flex flex-col items-center justify-center"
//           >
//             <div className="text-[28px] font-medium text-[#010000]">
//               {stat.value}
//             </div>
//             <div className="text-sm text-[#c65353b2] mt-1">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* Settings Options */}
//       <div className="mt-6 px-2 flex flex-col gap-4">
//         {settingsOptions.map((option, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between bg-[#f6eaea] rounded-[20px] border border-[#00000033] px-4 py-2"
//           >
//             <div className="flex items-center gap-3">
//               <img src={option.icon} alt="" />
//               <span
//                 className={`text-sm text-[#c65353b2] ${
//                   option.isBold ? "font-semibold" : "font-normal"
//                 }`}
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
//   );
// }



import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient.js"; // Make sure this is the correct path

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const statCards = [
    { value: user?.blood_type || "N/A", label: "Blood Type" },
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
      hasSwitch: false,
    },
    {
      icon: "./getHelp.png",
      label: "Get Help",
      hasSwitch: false,
    },
    {
      icon: "./logout.png",
      label: "Log out",
      isBold: true,
      hasSwitch: false,
    },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Auth error:", error);
        setLoading(false);
        return;
      }

      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError) console.error("Profile fetch error:", profileError);
        else setUser(profile);
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="w-full h-dvh flex flex-col bg-white rounded-lg shadow">
      {/* Header */}
      <div className="w-full h-[10vh] md:h-[15vh] bg-[#c30000] text-white rounded-b-[30px] flex pt-3 justify-between">
        <button className="w-6 h-6">
          <img src="./left.png" alt="" />
        </button>
        <h1 className="text-lg font-medium h-6">Profile</h1>
        <div className="w-6" /> {/* spacer */}
      </div>

      {/* Profile Avatar */}
      <div className="flex justify-center mt-[-40px]">
        <div className="w-24 h-24 rounded-full border-[5px] border-white bg-[#d9d9d9] flex items-center justify-center text-2xl">
          {user?.full_name?.[0] || "U"}
        </div>
      </div>

      {/* User Info */}
      <div className="text-center mt-2">
        <h2 className="text-[#850000] text-xl font-medium">
          {user?.full_name || "Unknown User"}
        </h2>
        <p className="text-[#8a111166] text-xs">{user?.email}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4 px-2">
        <button
          onClick={() => (window.location.href = "tel:9816030281")}
          className="w-[48%] h-15 bg-[#c30000b2] rounded-full flex items-center justify-center gap-2 border border-[#0000004c]"
        >
          <img src="./callprofile.png" alt="" /> <span>Call Now</span>
        </button>
        <button className="w-[48%] h-15 bg-white rounded-full flex items-center justify-center gap-2 border border-[#0000004c]">
          <img src="./shareprofile.png" alt="" /> <span>Request</span>
        </button>
      </div>

      {/* Stat Cards */}
      <div className="flex justify-between mt-6 px-2">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="w-[30%] h-[82px] bg-[#f6eaea] rounded-[20px] border border-[#00000033] flex flex-col items-center justify-center"
          >
            <div className="text-[28px] font-medium text-[#010000]">
              {stat.value}
            </div>
            <div className="text-sm text-[#c65353b2] mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Settings Options */}
      <div className="mt-6 px-2 flex flex-col gap-4">
        {settingsOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#f6eaea] rounded-[20px] border border-[#00000033] px-4 py-2"
          >
            <div className="flex items-center gap-3">
              <img src={option.icon} alt="" />
              <span
                className={`text-sm text-[#c65353b2] ${
                  option.isBold ? "font-semibold" : "font-normal"
                }`}
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
}
