import React, { useState } from 'react';

const VacationProfiles = () => {
  const [vacationProfiles, setVacationProfiles] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' });

  const mockData = [
    {
      employeeId: 1,
      employeeName: 'Doe, John',
      totalVacationDays: 20,
      sickDays: 5,
      vacationDaysTaken: 8,
      vacationDaysRemaining: 12,
      sickDaysTaken: 2,
      sickDaysRemaining: 3,
    },
    {
      employeeId: 2,
      employeeName: 'Lovelace, Ada',
      totalVacationDays: 18,
      sickDays: 4,
      vacationDaysTaken: 10,
      vacationDaysRemaining: 8,
      sickDaysTaken: 1,
      sickDaysRemaining: 3,
    },
  ];

  const fetchData = () => {
    setVacationProfiles(mockData);
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestSort = (key) => {
    let direction = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sortableProfiles = [...vacationProfiles];
    if (sortConfig.key !== null) {
      sortableProfiles.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableProfiles;
  };

  const sortedProfiles = sortedData();

  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-center">Vacation Profiles</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th
              onClick={() => requestSort('employeeId')}
              className="text-center"
            >
              Employee ID
              {sortConfig.key === 'employeeId' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'employeeId' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
            <th
              onClick={() => requestSort('employeeName')}
              className="text-center"
            >
              Employee Name
              {sortConfig.key === 'employeeName' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'employeeName' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
            <th
              onClick={() => requestSort('totalVacationDays')}
              className="text-center"
            >
              Total Vacation Days
              {sortConfig.key === 'totalVacationDays' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'totalVacationDays' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
            <th onClick={() => requestSort('sickDays')} className="text-center">
              Sick Days
              {sortConfig.key === 'sickDays' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'sickDays' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
            <th
              onClick={() => requestSort('vacationDaysTaken')}
              className="text-center"
            >
              Vacation Days Taken
              {sortConfig.key === 'vacationDaysTaken' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'vacationDaysTaken' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
            <th
              onClick={() => requestSort('vacationDaysRemaining')}
              className="text-center"
            >
              Vacation Days Remaining
              {sortConfig.key === 'vacationDaysRemaining' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'vacationDaysRemaining' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
            <th
              onClick={() => requestSort('sickDaysTaken')}
              className="text-center"
            >
              Sick Days Taken
              {sortConfig.key === 'sickDaysTaken' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'sickDaysTaken' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
            <th
              onClick={() => requestSort('sickDaysRemaining')}
              className="text-center"
            >
              Sick Days Remaining
              {sortConfig.key === 'sickDaysRemaining' &&
                sortConfig.direction === 'asc' && <span>&uarr;</span>}
              {sortConfig.key === 'sickDaysRemaining' &&
                sortConfig.direction === 'desc' && <span>&darr;</span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProfiles.map((profile) => (
            <tr key={profile.employeeId} className="table-row">
              <td className="text-center">{profile.employeeId}</td>
              <td className="text-center">{profile.employeeName}</td>
              <td className="text-center">{profile.totalVacationDays}</td>
              <td className="text-center">{profile.sickDays}</td>
              <td className="text-center">{profile.vacationDaysTaken}</td>
              <td className="text-center">{profile.vacationDaysRemaining}</td>
              <td className="text-center">{profile.sickDaysTaken}</td>
              <td className="text-center">{profile.sickDaysRemaining}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VacationProfiles;
