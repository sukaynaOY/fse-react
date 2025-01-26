import React from 'react';

const MedicalTable = ({ data, searchQuery }) => {
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gradient-to-r bg-sky-800 to-blue-600">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase">Nom Medicament</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase">Prix</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-700">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.nomMedicament}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.prix}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="px-6 py-4 text-sm text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalTable;