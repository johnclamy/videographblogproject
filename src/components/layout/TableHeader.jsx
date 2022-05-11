import tableHeader from '../../constants/table-header'

const TableHeader = () => (
  <thead>
    <tr>
      {tableHeader.map((th, idx) =>
        <th key={idx} className='text-center text-uppercase text-primary'>{th}</th>
      )}
    </tr>
  </thead>
)

export default TableHeader