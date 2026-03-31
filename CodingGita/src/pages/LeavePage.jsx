import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Plus, User, FileText } from "lucide-react";

const Stat = ({ title, value, color = "text-white" }) => (
  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center">
    <h3 className="text-sm font-medium text-neutral-400 mb-1">{title}</h3>
    <span className={`text-2xl font-bold ${color}`}>{value}</span>
  </div>
);

const LeavePage = () => {
  const [form, setForm] = useState({
    category: "",
    fromDate: "",
    toDate: "",
    leaveTime: "",
    returnTime: "",
    remark: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
      <Navbar />

      <div className="px-6 pt-5 pb-8 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Apply for Leave</h1>
          <p className="text-neutral-400">
            Submit your leave application and track your requests
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Stat title="Total Applications" value="0" />
          <Stat title="Pending Review" value="0" color="text-amber-300" />
          <Stat title="Approved" value="0" color="text-emerald-300" />
          <Stat title="Rejected" value="0" color="text-red-300" />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FORM */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <Plus className="w-4 h-4 text-neutral-400" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">New Leave Application</h2>
                <p className="text-sm text-neutral-400">
                  Fill out the form to submit your leave request
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* CATEGORY */}
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">
                  Leave Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-500"
                  required
                >
                  <option value="" disabled>Select category</option>
                  <option value="sick">Sick Leave</option>
                  <option value="casual">Casual Leave</option>
                  <option value="earned">Earned Leave</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* DATES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    From Date
                  </label>
                  <input
                    type="date"
                    name="fromDate"
                    value={form.fromDate}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-500 [color-scheme:dark]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    To Date
                  </label>
                  <input
                    type="date"
                    name="toDate"
                    value={form.toDate}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-500 [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              {/* TIMES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Leave Time (Optional)
                  </label>
                  <input
                    type="time"
                    name="leaveTime"
                    value={form.leaveTime}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-500 [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">
                    Return Time (Optional)
                  </label>
                  <input
                    type="time"
                    name="returnTime"
                    value={form.returnTime}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-500 [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* REMARK */}
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">
                  Remark
                </label>
                <textarea
                  name="remark"
                  value={form.remark}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-500"
                  placeholder="Reason for leave..."
                  required
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3 hover:bg-neutral-200 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
          
          {/* SECOND COLUMN FOR ADDITIONAL INFO/HISTORY (Optional) */}
          <div className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-neutral-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Recent Applications</h2>
                  <p className="text-sm text-neutral-400">
                    Your recent leave requests
                  </p>
                </div>
              </div>
              
              <div className="text-center text-neutral-500 py-8">
                No recent applications found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePage;
