import React from "react";

const CargoTable = ({ cargoList, updateStatus, setFilterStatus }) => {
  const handleStatusChange = (id, newStatus, departureDate) => {
    const today = new Date().toISOString().split("T")[0];
    if (newStatus === "Доставлен" && departureDate > today) {
      alert("Невозможно изменить статус на 'Доставлен', если дата отправления в будущем.");
      return;
    }
    updateStatus(id, newStatus);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Ожидает отправки":
        return "text-warning";
      case "В пути":
        return "text-primary";
      case "Доставлен":
        return "text-success";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label>Фильтр по статусу: </label>
        <select
          className="form-select"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">Все</option>
          <option value="Ожидает отправки">Ожидает отправки</option>
          <option value="В пути">В пути</option>
          <option value="Доставлен">Доставлен</option>
        </select>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Статус</th>
            <th>Пункт отправления</th>
            <th>Пункт назначения</th>
            <th>Дата отправления</th>
          </tr>
        </thead>
        <tbody>
          {cargoList.map((cargo) => (
            <tr key={cargo.id}>
              <td>{cargo.id}</td>
              <td>{cargo.name}</td>
              <td>
                <select
                  className={`form-select ${getStatusClass(cargo.status)}`}
                  value={cargo.status}
                  onChange={(e) =>
                    handleStatusChange(cargo.id, e.target.value, cargo.departureDate)
                  }
                >
                  <option value="Ожидает отправки">Ожидает отправки</option>
                  <option value="В пути">В пути</option>
                  <option value="Доставлен">Доставлен</option>
                </select>
              </td>
              <td>{cargo.origin}</td>
              <td>{cargo.destination}</td>
              <td>{cargo.departureDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CargoTable;
