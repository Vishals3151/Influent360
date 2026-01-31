// src/pages/FestivalCalendar.jsx
import React, { useState, useMemo } from 'react';
import { 
  Calendar, Search, Lock, Unlock, Plus, Edit2, Trash2, X, Save 
} from 'lucide-react';

const initialFestivalsData = {
  2025: {
    1: [
      { id: 1, name: 'Makar Sankranti', type: 'Hindu', description: 'Harvest festival, kite flying', date: '2025-01-14', day: 14 },
      { id: 2, name: 'Republic Day', type: 'National', description: 'National holiday celebration', date: '2025-01-26', day: 26 }
    ],
    2: [{ id: 3, name: 'Maha Shivaratri', type: 'Hindu', description: 'Great night of Shiva', date: '2025-02-26', day: 26 }],
    3: [{ id: 4, name: 'Holi', type: 'Hindu', description: 'Festival of colors', date: '2025-03-14', day: 14 }],
    4: [
      { id: 5, name: 'Ram Navami', type: 'Hindu', description: 'Birth of Lord Rama', date: '2025-04-06', day: 6 },
      { id: 6, name: 'Good Friday', type: 'Christian', description: 'Christian observance', date: '2025-04-18', day: 18 }
    ],
    5: [{ id: 7, name: 'Eid ul-Fitr', type: 'Islamic', description: 'Festival of breaking the fast', date: '2025-05-01', day: 1 }],
    6: [{ id: 8, name: 'Eid ul-Adha', type: 'Islamic', description: 'Festival of sacrifice', date: '2025-06-07', day: 7 }],
    7: [{ id: 9, name: 'Muharram', type: 'Islamic', description: 'Islamic New Year', date: '2025-07-06', day: 6 }],
    8: [
      { id: 10, name: 'Independence Day', type: 'National', description: 'National holiday celebration', date: '2025-08-15', day: 15 },
      { id: 11, name: 'Raksha Bandhan', type: 'Hindu', description: 'Brother-sister bond celebration', date: '2025-08-09', day: 9 },
      { id: 12, name: 'Janmashtami', type: 'Hindu', description: 'Birth of Lord Krishna', date: '2025-08-27', day: 27 }
    ],
    9: [{ id: 13, name: 'Ganesh Chaturthi', type: 'Hindu', description: 'Birth of Lord Ganesha', date: '2025-09-27', day: 27 }],
    10: [
      { id: 14, name: 'Gandhi Jayanti', type: 'National', description: 'Birth of Mahatma Gandhi', date: '2025-10-02', day: 2 },
      { id: 15, name: 'Dussehra', type: 'Hindu', description: 'Victory of good over evil', date: '2025-10-22', day: 22 }
    ],
    11: [{ id: 16, name: 'Diwali', type: 'Hindu', description: 'Festival of lights', date: '2025-11-10', day: 10 }],
    12: [{ id: 17, name: 'Christmas', type: 'Christian', description: 'Birth of Jesus Christ', date: '2025-12-25', day: 25 }]
  }
};

const FestivalCalendar = () => {
  const [festivalsData, setFestivalsData] = useState(initialFestivalsData);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingFestival, setEditingFestival] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Hindu',
    description: '',
    date: '',
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const typeColors = {
    Hindu: 'bg-orange-500',
    National: 'bg-emerald-500',
    Islamic: 'bg-blue-500',
    Christian: 'bg-violet-500'
  };

  const typeBadgeColors = {
    Hindu: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    National: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    Islamic: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Christian: 'bg-violet-500/20 text-violet-300 border-violet-500/30'
  };

  const currentMonthFestivals = useMemo(() => {
    const festivals = festivalsData[selectedYear]?.[selectedMonth] || [];
    if (!searchQuery) return festivals;
    return festivals.filter(f =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [festivalsData, selectedYear, selectedMonth, searchQuery]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddFestival = () => {
    const date = new Date(formData.date);
    if (isNaN(date.getTime())) {
      alert('Please select a valid date');
      return;
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const newFestival = {
      id: Date.now(),
      name: formData.name.trim(),
      type: formData.type,
      description: formData.description.trim(),
      date: formData.date,
      day
    };

    setFestivalsData(prev => {
      const updated = { ...prev };
      if (!updated[year]) updated[year] = {};
      if (!updated[year][month]) updated[year][month] = [];
      updated[year][month] = [...updated[year][month], newFestival].sort((a, b) => a.day - b.day);
      return updated;
    });

    setShowAddModal(false);
    setFormData({ name: '', type: 'Hindu', description: '', date: '' });
  };

  const handleEditFestival = () => {
    const date = new Date(formData.date);
    if (isNaN(date.getTime())) {
      alert('Please select a valid date');
      return;
    }

    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    const newDay = date.getDate();

    setFestivalsData(prev => {
      const updated = { ...prev };

      if (updated[selectedYear]?.[selectedMonth]) {
        updated[selectedYear][selectedMonth] = updated[selectedYear][selectedMonth]
          .filter(f => f.id !== editingFestival.id);
      }

      if (!updated[newYear]) updated[newYear] = {};
      if (!updated[newYear][newMonth]) updated[newYear][newMonth] = [];
      updated[newYear][newMonth] = [
        ...updated[newYear][newMonth],
        { ...editingFestival, ...formData, day: newDay, date: formData.date }
      ].sort((a, b) => a.day - b.day);

      return updated;
    });

    setEditingFestival(null);
    setFormData({ name: '', type: 'Hindu', description: '', date: '' });
  };

  const handleDeleteFestival = (festivalId) => {
    if (window.confirm('Are you sure you want to delete this festival?')) {
      setFestivalsData(prev => {
        const updated = { ...prev };
        if (updated[selectedYear]?.[selectedMonth]) {
          updated[selectedYear][selectedMonth] = updated[selectedYear][selectedMonth]
            .filter(f => f.id !== festivalId);
        }
        return updated;
      });
    }
  };

  const openEditModal = (festival) => {
    setEditingFestival(festival);
    setFormData({
      name: festival.name,
      type: festival.type,
      description: festival.description,
      date: festival.date
    });
  };

  const closeModal = () => {
    setShowAddModal(false);
    setEditingFestival(null);
    setFormData({ name: '', type: 'Hindu', description: '', date: '' });
  };

  return (
    <div className="min-h-screen bg-[#120E0B] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#1A1411] rounded-2xl p-8 border border-[#2D231F] shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-8 h-8 text-orange-500" />
                <h1 className="text-3xl font-bold text-white">Festival Calendar</h1>
              </div>
              <p className="text-gray-400 text-sm">
                Plan your social media content around Indian festivals 🎉
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isAdminMode 
                  ? 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/30' 
                  : 'bg-[#1A1411] hover:bg-[#2D231F] text-white border border-[#2D231F]'
              }`}
            >
              {isAdminMode ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              <span className="text-sm">{isAdminMode ? 'Admin Mode' : 'View Mode'}</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1A1411] rounded-2xl p-6 border border-[#2D231F] shadow-xl space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-2">
              <Calendar className="w-4 h-4" />
              Select Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="w-full px-4 py-3 bg-[#2D231F] text-white rounded-lg border border-[#2D231F] focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-2">
              <Calendar className="w-4 h-4" />
              Select Month
            </label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
              className="w-full px-4 py-3 bg-[#2D231F] text-white rounded-lg border border-[#2D231F] focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {months.map((month, index) => (
                <option key={month} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-2">
              <Search className="w-4 h-4" />
              Search Festival
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search festivals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#2D231F] text-white placeholder-gray-500 rounded-lg border border-[#2D231F] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {isAdminMode && (
            <button
              onClick={() => setShowAddModal(true)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-orange-500/30"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Festival</span>
            </button>
          )}
        </div>

        {/* Festival List */}
        <div className="bg-[#1A1411] rounded-2xl p-6 border border-[#2D231F] shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {months[selectedMonth - 1]} {selectedYear}
            </h2>
            <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
              {currentMonthFestivals.length} {currentMonthFestivals.length === 1 ? 'Festival' : 'Festivals'}
            </div>
          </div>

          <div className="space-y-4">
            {currentMonthFestivals.length > 0 ? (
              currentMonthFestivals.map((festival) => (
                <div
                  key={festival.id}
                  className="flex items-start gap-4 p-5 bg-[#2D231F] hover:bg-[#3A2D28] rounded-xl border border-[#2D231F] hover:border-[#4A3A35] transition-all duration-200 cursor-pointer group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 ${typeColors[festival.type]} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {festival.day}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                        {festival.name}
                      </h3>
                      <span className={`flex-shrink-0 px-3 py-1 ${typeBadgeColors[festival.type]} rounded-full text-xs font-medium border`}>
                        {festival.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{festival.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(festival.date)}</span>
                    </div>
                  </div>

                  {isAdminMode && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(festival)}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-all duration-200"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteFestival(festival.id)}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-[#2D231F] mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No festivals found</p>
                <p className="text-gray-500 text-sm mt-2">
                  {searchQuery ? 'Try adjusting your search query' : 'No festivals in this month'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingFestival) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1A1411] rounded-2xl p-6 max-w-md w-full border border-[#2D231F] shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {editingFestival ? 'Edit Festival' : 'Add New Festival'}
              </h3>
              <button
                onClick={closeModal}
                className="p-1 hover:bg-[#2D231F] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Festival Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter festival name"
                  className="w-full px-4 py-3 bg-[#2D231F] text-white placeholder-gray-500 rounded-lg border border-[#2D231F] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Festival Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-[#2D231F] text-white rounded-lg border border-[#2D231F] focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Hindu">Hindu</option>
                  <option value="National">National</option>
                  <option value="Islamic">Islamic</option>
                  <option value="Christian">Christian</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  placeholder="Enter festival description"
                  rows="3"
                  className="w-full px-4 py-3 bg-[#2D231F] text-white placeholder-gray-500 rounded-lg border border-[#2D231F] focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-[#2D231F] text-white rounded-lg border border-[#2D231F] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={closeModal}
                  className="flex-1 px-4 py-3 bg-[#2D231F] hover:bg-[#3A2D28] text-white rounded-lg transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={editingFestival ? handleEditFestival : handleAddFestival}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-orange-500/30"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingFestival ? 'Update' : 'Add'} Festival</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FestivalCalendar;