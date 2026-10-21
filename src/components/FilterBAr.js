import React from 'react';

const FilterBar = ({ searchTerm, setSearchTerm, filterStatus, setFilterStatus }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="searchInput">Tìm kiếm: </label>
      <input
        id="searchInput"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Nhập tên sự kiện..."
      />

      <label htmlFor="statusSelect" style={{ marginLeft: '20px' }}>Tình trạng: </label>
      <select
        id="statusSelect"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="Tất cả">Tất cả</option>
        <option value="Còn chỗ">Còn chỗ</option>
        <option value="Đã đầy">Đã đầy</option>
      </select>
    </div>
  );
};

export default FilterBar; 