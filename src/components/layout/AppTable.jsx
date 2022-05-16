import Table from 'react-bootstrap/Table'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const AppTable = () => {
  return (
    <Table className="mt-2 mb-4" responsive striped bordered hover size="sm">
      <TableHeader />
      <TableBody />
    </Table>
  );
}

export default AppTable