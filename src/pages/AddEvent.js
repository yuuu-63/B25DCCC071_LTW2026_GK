import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEvent = ({ events, onAdd }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !location || !date || !capacity) {
      setErrorMsg('Vui lòng nhập đầy đủ thông tin phía dưới form');
      return;
    }

    const numCapacity = Number(capacity);
    if (isNaN(numCapacity) || numCapacity < 10 || numCapacity > 1000) {
      setErrorMsg('Sức chứa phải từ 10 đến 1000');
      return;
    }

    const maxId = events.length > 0 ? Math.max(...events.map((ev) => ev.id)) : 0;
    const newEvent = {
      id: maxId + 1,
      name,
      location,
      date,
      capacity: numCapacity,
      registered: 0,
    };

    onAdd(newEvent);
    navigate('/events', { replace: true });
  };

  return (
    <div>
      <h2>Thêm sự kiện mới</h2>
      {errorMsg && <p className="error-text">{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên sự kiện</label><br />
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="location">Địa điểm</label><br />
          <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date">Ngày diễn ra</label><br />
          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="capacity">Sức chứa</label><br />
          <input id="capacity" type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Thêm</button>
      </form>
    </div>
  );
};

export default AddEvent;