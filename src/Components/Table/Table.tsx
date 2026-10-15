


interface TableProps {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
}
export default function Table({ columns, data, striped }:TableProps) {
  return (
    <>
     <table className="w-full border border-gray-200 text-left">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col} className="px-4 py-2 font-semibold">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={striped && index % 2 === 1 ? "bg-gray-50" : ""}
          >
            {columns.map((col) => (
              <td key={col} className="px-4 py-2 border-t border-gray-200">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
