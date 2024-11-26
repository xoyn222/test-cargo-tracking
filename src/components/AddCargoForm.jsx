import React, { useState } from "react";

const AddCargoForm = ({ addCargo }) => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !origin || !destination || !departureDate) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    const newCargo = {
      id: `CARGO${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`,
      name,
      status: "Ожидает отправки",
      origin,
      destination,
      departureDate,
    };
    addCargo(newCargo);
    setName("");
    setOrigin("");
    setDestination("");
    setDepartureDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Название груза</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Пункт отправления</label>
        <input
          type="text"
          className="form-control"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Пункт назначения</label>
        <input
          type="text"
          className="form-control"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Дата отправления</label>
        <input
          type="date"
          className="form-control"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Добавить груз</button>
    </form>
  );
};

export default AddCargoForm;
