import { useEffect } from 'react';
import Table from '../../components/Table/Table';
import { getUsers } from '../../api/UserApi';

function Employees() {
  return (
    <div>
      <h1>Employees page</h1>
      <Table />
    </div>
  );
}
export default Employees;
