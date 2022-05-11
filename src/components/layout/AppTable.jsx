import Table from 'react-bootstrap/Table'
import TableHeader from './TableHeader'

const AppTable = () => {
  return (
    <Table className="mt-2 mb-4" responsive striped bordered hover size="sm">
      <TableHeader />
    </Table>
  );
}

export default AppTable