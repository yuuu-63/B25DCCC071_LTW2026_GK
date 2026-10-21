import React from 'react';
import { Link } from 'react-router-dom';

const EventRow = ({ event, onDelete, onRegister }) => {
  const isFull = event.registered >= event.capacity;

  return (
    <tr>
      <td>
        <Link to={`/events/${event.id}`}>{event.name}</Link>
      </td>
      <td>{event.location}</td>
      <td>{event.date}</td>
      <td className={isFull ? 'full-event' : ''}>
        {event.registered}/{event.capacity} {isFull && '(Đã đầy)'}
      </td>
      <td>
        <button onClick={() => onRegister(event.id)} disabled={isFull}>
          Đăng ký
        </button>
        <button onClick={() => onDelete(event.id)} style={{ marginLeft: '10px' }}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default EventRow;