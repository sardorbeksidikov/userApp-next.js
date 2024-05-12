import React from 'react'

const Main = () => {
  return (
    <main className="container px-24 mx-auto">
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ism
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Familiya
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Daraja
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Guruh
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amallar
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John</td>
              <td className="px-6 py-4 whitespace-nowrap">Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Middle</td>
              <td className="px-6 py-4 whitespace-nowrap">A-101</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="mr-2 text-blue-500 hover:text-blue-700 rounded-md border border-green-500 px-4 py-2 ">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700 rounded-md border border-orange-800 px-4 py-2">
                  Delete
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Main