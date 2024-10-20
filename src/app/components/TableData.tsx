import React from 'react'

const TableData = () => {
  const sampleData = [
    { callValue: "$150", strikePrice: "$145", putValue: "$5" },
    { callValue: "$200", strikePrice: "$195", putValue: "$3" },
    { callValue: "$120", strikePrice: "$115", putValue: "$2" },
  ];
  return (
    <>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Call VALUE</th>
            <th className="py-3 px-6 text-left">Strike Price</th>
            <th className="py-3 px-6 text-left">PUT VALUE</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {sampleData.map((data, index) => (
            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
              <td className="py-3 px-6">{data.callValue}</td>
              <td className="py-3 px-6">{data.strikePrice}</td>
              <td className="py-3 px-6">{data.putValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default TableData
