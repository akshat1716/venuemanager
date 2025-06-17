import React from "react";
import { MapPin, Home, Settings, HelpCircle, Ticket, LayoutDashboard, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function SidebarItem({ icon, label, active, to }) {
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${
        active ? "bg-[#181B23] text-orange-500" : "hover:bg-[#181B23] text-gray-300"
      }`}
    >
      {icon}
      <span className="ml-3 hidden md:block">{label}</span>
    </Link>
  );
}

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#191923] text-white">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-[#23263A] flex flex-col py-6 px-2 md:px-4 transition-all duration-300">
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">Venue</h1>
        </div>
        <nav className="flex-1 space-y-2">
          <SidebarItem icon={<LayoutDashboard className="text-orange-500" />} label="Dashboard" active to="/" />
          <SidebarItem icon={<Home />} label="Tournaments" to="/tournaments" />
          <SidebarItem icon={<MapPin />} label="Venues" to="/venues" />
          <SidebarItem icon={<Settings />} label="User Settings" to="/settings" />
          <SidebarItem icon={<Ticket />} label="Support Ticket" to="/support" />
          <SidebarItem icon={<HelpCircle />} label="Help" to="/help" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-[#23263A]">
          <div className="flex items-center space-x-2">
            <span className="text-lg md:text-xl font-semibold">Dashboard</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center cursor-pointer">
              <img src="/avatar.jpg" alt="John Doe" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
              <div className="ml-2 text-left hidden md:block">
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-gray-400">Manager</div>
              </div>
              <ChevronDown className="ml-1 hidden md:block" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="bg-[#23263A] rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Venues</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            
            <div className="bg-[#23263A] rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Venues</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Home className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            <div className="bg-[#23263A] rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Tournaments</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <Ticket className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-[#23263A] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  to="/add-venue"
                  className="flex items-center p-4 bg-[#181B23] rounded-lg hover:bg-gray-700 transition"
                >
                  <MapPin className="w-6 h-6 text-orange-500 mr-3" />
                  <div>
                    <p className="font-medium">Add New Venue</p>
                    <p className="text-sm text-gray-400">Create a new venue location</p>
                  </div>
                </Link>
                
                <Link 
                  to="/venues"
                  className="flex items-center p-4 bg-[#181B23] rounded-lg hover:bg-gray-700 transition"
                >
                  <Home className="w-6 h-6 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium">Manage Venues</p>
                    <p className="text-sm text-gray-400">View and edit existing venues</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 