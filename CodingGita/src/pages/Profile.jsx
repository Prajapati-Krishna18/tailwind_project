import React from 'react';
import Navbar from '../components/Navbar';

export default function Profile() {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Session Found</h1>
          <p className="text-gray-400 mb-6">Please sign in to view your profile information.</p>
          <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  const personalInfo = [
    { label: "ENROLLMENT NUMBER", value: user.uid },
    { label: "COURSE", value: "—" },
    { label: "BRANCH", value: "—" },
    { label: "SEMESTER", value: user.attendance?.semester || "—" },
    { label: "GENDER", value: "—" },
    { label: "ALTERNATE EMAIL", value: "—", isBlue: true },
    { label: "ALTERNATE PHONE", value: "—" },
    { label: "GUARDIAN", value: "—" },
  ];

  const contactLinks = [
    { label: "MOBILE", value: user.mobile },
    { label: "PARENT MOBILE", value: "—" },
    { label: "UNIVERSITY EMAIL", value: user.email, isBlue: true },
    { label: "CURRENT EMAIL", value: user.email, isBlue: true },
    { label: "ADDRESS", value: "—" },
    { label: "PORTFOLIO", value: "—" },
    { label: "RESUME", value: "—" },
    { label: "GITHUB", value: "—" },
    { label: "LINKEDIN", value: "—" },
    { label: "TWITTER", value: "—" },
    { label: "YOUTUBE", value: "—" },
  ];

  const academics = [
    { label: "UNIVERSITY", value: user.university },
    { label: "UNIVERSITY UID", value: user.uid },
    { label: "DATE OF BIRTH", value: user.dob || "—" },
    { label: "ADMISSION YEAR", value: "—" },
    { label: "CURRENT YEAR", value: "—" },
    { label: "SECTION", value: "—" },
    { label: "SUBJECTS", value: user.subjects?.join(", ") || "—" },
    { label: "MENTORS", value: user.mentors?.map(m => m.name).join(", ") || "—" },
  ];

  const InfoCard = ({ label, value, isBlue }) => (
    <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl px-4 py-3.5">
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-sm font-medium ${isBlue ? 'text-blue-400' : 'text-gray-300'}`}>{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-[#0a0a0a] text-[#e0e0e0] font-sans pb-12">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 py-8">
        
        {/* HEADER */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Profile</h1>
            <p className="text-gray-500 text-sm">View and update your personal information</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Reset Password</button>
            <button className="bg-[#1a1a1a] border border-[#333] hover:border-gray-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Edit</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* LEFT: Identity Card */}
          <div className="bg-[#141414] border border-[#222] rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden mb-6 border-4 border-[#1f1f1f]">
               <img 
                src={user.image || "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773738246/3504a569-8920-401c-a6f6-7c7350973141_xfuttq.png"} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-1 tracking-wide">{user.name}</h2>
            <p className="text-gray-500 text-sm font-medium mb-1">{user.role || "Student"}</p>
            <p className="text-gray-600 text-xs mb-8">{user.university} • {user.uid}</p>
            <div className="flex gap-3 w-full">
              <button className="flex-1 bg-[#1a1a1a] border border-[#333] hover:border-gray-500 text-white text-[13px] font-bold py-2 rounded-lg transition-colors cursor-pointer">Edit Profile</button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold py-2 rounded-lg transition-colors cursor-pointer">Reset Password</button>
            </div>
          </div>

          {/* RIGHT: Basic Info Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalInfo.map((info, idx) => (
              <InfoCard key={idx} {...info} />
            ))}
          </div>
        </div>

        {/* SECTION: Contact & Links */}
        <section className="bg-[#141414] border border-[#222] rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-bold text-white mb-6">Contact & Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((info, idx) => (
              <InfoCard key={idx} {...info} />
            ))}
          </div>
        </section>

        {/* SECTION: Academics */}
        <section className="bg-[#141414] border border-[#222] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Academics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academics.map((info, idx) => (
              <InfoCard key={idx} {...info} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}