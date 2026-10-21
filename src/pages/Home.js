import React from 'react';

const Home = ({ events }) => {
  const totalEvents = events.length;
  const totalRegistered = events.reduce((sum, ev) => sum + ev.registered, 0);
  const totalFull = events.filter((ev) => ev.registered >= ev.capacity).length;

  return (
    <div>
      <h1>Sự kiện CLB</h1>
      <p>Tổng số sự kiện: {totalEvents}</p>
      <p>Tổng số lượt đăng ký: {totalRegistered}</p>
      <p>Số sự kiện đã đầy: {totalFull}</p>
    </div>
  );
};

export default Home;