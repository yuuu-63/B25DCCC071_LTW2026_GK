import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import EventTable from '../components/EventTable';

const EventList = ({ events, onDelete, onRegister }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('Tất cả');

  const filteredEvents = events.filter((ev) => {
    const matchesName = ev.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isFull = ev.registered >= ev.capacity;
    
    if (filterStatus === 'Còn chỗ') return matchesName && !isFull;
    if (filterStatus === 'Đã đầy') return matchesName && isFull;
    return matchesName;
  });

  return (
    <div>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      
      <p>Tìm thấy {filteredEvents.length} sự kiện</p>

      {filteredEvents.length === 0 ? (
        <p>Không có dữ liệu</p>
      ) : (
        <EventTable events={filteredEvents} onDelete={onDelete} onRegister={onRegister} />
      )}
    </div>
  );
};

export default EventList; 