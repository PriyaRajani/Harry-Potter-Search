import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Filters = ({ houseFilter, speciesFilter, searchTerm, onHouseChange, onSpeciesChange, onSearch }) => {
  return (
    <form className='mb-4'>
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <div className="mb-3">
            <label className="form-label magic-filter-heading">Filter by House:</label>
            <select className="form-select" value={houseFilter} onChange={onHouseChange}>
              <option value="">All</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
            </select>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="m-1 px-5">
            <label className="form-label magic-filter-heading"> Search characters:  </label>
            <br/>
            <input type="search" value={searchTerm} onChange={onSearch} />
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="mb-3">
            <label className="form-label magic-filter-heading">Filter by Species:</label>
            <select className="form-select" value={speciesFilter} onChange={onSpeciesChange}>
              <option value="">All</option>
              <option value="human">Human</option>
              <option value="half-giant">Half-Giant</option>
              <option value="cat">Cat</option>
              <option value="werewolf">Werewolf</option>
            </select>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default Filters;
