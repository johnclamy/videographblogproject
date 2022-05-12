const TableBody = ({ todos }) => {
  const tableBody = todos.map(todo =>
    <tr key={todo.id}>
      {Object.values(todo).slice(1, 3).map(cell =>
      <td>{cell}</td>)}
    </tr>  
  )
  return <tbody>{tableBody}</tbody>
}

export default TableBody