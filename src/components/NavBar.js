import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" end>Trang chủ</NavLink>
      <NavLink to="/events">Danh sách</NavLink>
      <NavLink to="/events/new">Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;