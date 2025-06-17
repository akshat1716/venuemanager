import React from "react";
import { MapPin, Home, Settings, HelpCircle, Ticket, LayoutDashboard, ChevronDown, Plus, Search, Filter } from "lucide-react";
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

export default function VenueManager() {
  const venues = [
    { id: 1, name: "Seattle Arena", address: "123 Main St, Seattle, WA", status: "Active" },
    { id: 2, name: "Portland Stadium", address: "456 Oak Ave, Portland, OR", status: "Active" },
    { id: 3, name: "Vancouver Center", address: "789 Pine Rd, Vancouver, BC", status: "Inactive" },
  ];

  return (
    <div className="flex h-screen bg-[#181B23] text-white">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-[#23263A] flex flex-col py-6 px-2 md:px-4 transition-all duration-300">
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">Venue</h1>
        </div>
        <nav className="flex-1 space-y-2">
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" to="/" />
          <SidebarItem icon={<Home />} label="Tournaments" to="/tournaments" />
          <SidebarItem icon={<MapPin className="text-orange-500" />} label="Venues" active to="/venues" />
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
            <span className="text-lg md:text-xl font-semibold">Venues</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/add-venue" className="px-3 md:px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition text-sm md:text-base flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Add Venue</span>
            </Link>
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
          {/* Search and Filter */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search venues..." 
                className="w-full pl-10 pr-4 py-2 bg-[#23263A] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-[#23263A] border border-gray-700 rounded-md hover:bg-gray-700 transition">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {venues.map((venue) => (
              <div key={venue.id} className="bg-[#23263A] rounded-lg p-4 md:p-6 hover:bg-gray-700 transition cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{venue.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    venue.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {venue.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{venue.address}</p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md transition text-sm">
                    Edit
                  </button>
                  <button className="flex-1 border border-gray-500 text-gray-300 px-3 py-2 rounded-md transition hover:bg-gray-700 text-sm">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {venues.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No venues found</h3>
              <p className="text-gray-400 mb-6">Get started by adding your first venue</p>
              <Link to="/add-venue" className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Venue
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 