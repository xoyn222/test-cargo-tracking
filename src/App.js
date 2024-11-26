
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CargoTable from "./components/CargoTable";
import AddCargoForm from "./components/AddCargoForm";

const App = () => {
  const [cargoList, setCargoList] = useState([
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24",
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26",
    },
  ]);
  const [filterStatus, setFilterStatus] = useState("");

  const addCargo = (newCargo) => {
    setCargoList([...cargoList, newCargo]);
  };

  const updateStatus = (id, newStatus) => {
    setCargoList(
      cargoList.map((cargo) =>
        cargo.id === id ? { ...cargo, status: newStatus } : cargo
      )
    );
  };

  const filteredCargoList = filterStatus
    ? cargoList.filter((cargo) => cargo.status === filterStatus)
    : cargoList;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Отслеживание грузов</h1>
      <AddCargoForm addCargo={addCargo} />
      <div className="mt-4">
        <CargoTable
          cargoList={filteredCargoList}
          updateStatus={updateStatus}
          setFilterStatus={setFilterStatus}
        />
      </div>
    </div>
  );
};

export default App;
