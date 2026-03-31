import React from 'react'

import Navbar from '../components/Navbar'

export default function Attendence() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })

  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  const subject = "React Native"
  const mentor = "John Doe"

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
      <Navbar />

      <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {/* CARD */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900">
            {/* HEADER */}
            <div className="p-4 border-b border-neutral-800 text-white font-semibold">
              Overview
            </div>

            {/* BODY */}
            <div className="p-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900">
                {/* TITLE */}
                <div className="p-4 border-b border-neutral-800">
                  <div className="text-white font-semibold">
                    Today's Attendance
                  </div>
                  <div className="text-neutral-400 text-sm">
                    Date: {today}
                  </div>
                </div>

                {/* LIST */}
                <div className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                      <div>
                        <div className="text-neutral-200 text-sm">{user.subjects[0]}</div>
                        <div className="text-xs text-neutral-400">
                          Marked by: {user.mentors[0].name} 
                        </div>
                      </div>
    
                      <span className="inline-flex items-center rounded-md border border-emerald-800 px-2 py-0.5 text-xs bg-emerald-950 text-emerald-300">
                        present
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}