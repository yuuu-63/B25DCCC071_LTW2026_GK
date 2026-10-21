import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventList from './pages/EventList';
import AddEvent from './pages/AddEvent';
import EventDetail from './pages/EventDetail';

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const savedEvents = localStorage.getItem('gk_events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    axios.get('/data/events.json', { signal: controller.signal })
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('gk_events', JSON.stringify(events));
    }
  }, [events, loading]);

  const handleDelete = (id) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  const handleRegister = (id) => {
    setEvents(events.map((ev) => {
      if (ev.id === id && ev.registered < ev.capacity) {
        return { ...ev, registered: ev.registered + 1 };
      }
      return ev;
    }));
  };

  const handleAdd = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Không tải được dữ liệu</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home events={events} />} />
        <Route path="events" element={<EventList events={events} onDelete={handleDelete} onRegister={handleRegister} />} />
        <Route path="events/new" element={<AddEvent events={events} onAdd={handleAdd} />} />
        <Route path="events/:id" element={<EventDetail events={events} />} />
      </Route>
    </Routes>
  );
};

export default App;