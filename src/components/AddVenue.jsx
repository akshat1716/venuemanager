import React, { useState } from "react";

export default function AddVenue() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    timezone: "",
    state: "",
    latitude: "",
    longitude: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Venue submitted! (Demo only)");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      city: "",
      zip: "",
      timezone: "",
      state: "",
      latitude: "",
      longitude: ""
    });
  };

  const inputClass = "bg-panel border border-[#252535] rounded-[6px] px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary text-[14px] font-normal h-10 shadow-[inset_1px_1px_2px_#3F3F46,inset_-2px_-2px_4px_#181820] border-t border-l border-[#3F3F46] border-b border-r border-[#181820] font-sans";
  const selectClass = "bg-panel border border-[#252535] rounded-[6px] px-4 py-3 pr-20 truncate text-text-primary focus:outline-none focus:ring-2 focus:ring-primary text-[13px] font-normal h-10 w-full appearance-none shadow-[inset_1px_1px_2px_#3F3F46,inset_-2px_-2px_4px_#181820] border-t border-l border-[#3F3F46] border-b border-r border-[#181820] font-sans";

  return (
    <div className="min-h-screen bg-dark flex flex-col font-sans">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-margin py-6 bg-panel border-b border-border-light">
        <h1 className="text-[32px] leading-[40px] font-bold font-sans text-text-primary tracking-tight">Add New Venue</h1>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-dark border border-primary">
            <svg width="20" height="20" fill="none" stroke="#FF5800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 9.5V19a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 19V9.5M12 3v13m0 0l-4-4m4 4l4-4"/></svg>
          </span>
          <span className="text-text-primary text-button font-semibold ml-2">|</span>
          <span className="text-text-primary text-button font-semibold ml-2 cursor-pointer">Add Venue</span>
        </div>
      </header>
      {/* Main Content: grid with 2 columns (form+map, ad) */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-0 lg:px-margin pt-2 pb-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-gutter items-stretch">
        {/* Left: Form+Map+BottomBar */}
        <div className="flex flex-col w-full h-full justify-start">
          <div className="flex flex-col lg:flex-row gap-gutter w-full h-full min-h-[401px] items-stretch">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 bg-panel rounded-input py-0 px-0 min-w-[360px] max-w-[360px] h-[401px] justify-between"
              style={{ boxShadow: 'none' }}
            >
              <input
                className={inputClass}
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                className={inputClass}
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <input
                className={inputClass}
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <input
                className={inputClass}
                placeholder="Zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
              />
              <div className="relative">
                <select
                  className={selectClass}
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Time Zone</option>
                  <option value="PST">Pacific Standard Time (PST)</option>
                  <option value="MST">Mountain Standard Time (MST)</option>
                  <option value="CST">Central Standard Time (CST)</option>
                  <option value="EST">Eastern Standard Time (EST)</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="18" height="18" fill="none" stroke="#A1A1AA" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </div>
              <input
                className={inputClass}
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
              <input
                className={inputClass}
                placeholder="Latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
              />
              <input
                className={inputClass}
                placeholder="Longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
              />
            </form>
            {/* Map */}
            <div className="flex-1 flex flex-col items-center justify-start min-w-[423px] max-w-[423px] mx-auto px-0 h-auto">
              <div className="w-full flex flex-col justify-between">
                <div className="mb-2 text-body text-text-primary font-medium pt-2">Select Venue Location on the Map</div>
                <div className="rounded-card overflow-hidden border border-border-light w-full h-[423px] min-h-[423px] max-h-[423px] bg-card flex-1">
                  <iframe
                    title="Venue Map"
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?q=Seattle&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Bar: only under form+map */}
          <div className="w-full bg-panel border-t border-border-light px-0 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 mt-8 rounded-b-card">
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white px-7 py-3 rounded-input font-semibold text-button shadow-md transition h-10"
                type="submit"
              >
                Enter Venue
                <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 border border-text-secondary text-white px-7 py-3 rounded-input font-semibold text-button bg-transparent hover:bg-card transition h-10"
                type="button"
              >
                Reset
                <svg width="22" height="22" fill="none" stroke="#A1A1AA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 17c0-4.418 3.582-8 8-8s8 3.582 8 8"/><polyline points="7 17 3 17 3 13"/></svg>
              </button>
            </div>
            <button
              className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white px-7 py-3 rounded-input font-semibold text-button shadow-md transition h-10"
              type="button"
            >
              Edit
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" /></svg>
            </button>
          </div>
        </div>
        {/* Right: Advertisement */}
        <div className="flex flex-col flex-1 h-full min-w-[340px] max-w-full mx-auto pr-0 lg:pr-4 items-end">
          <div className="w-full h-full min-h-[540px] bg-card rounded-card flex items-center justify-center text-black text-lg font-semibold border border-border-light">
            Advertisement
          </div>
        </div>
      </main>
    </div>
  );
} 