// import React, { useState, useEffect } from 'react';
// import { getSuppliers, addSupplier } from '../api/api';

// function SuppliersPage() {
//   const [suppliers, setSuppliers] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [form, setForm] = useState({ name:'', email:'', phone:'', location:'' });

//   // Load suppliers + orders
//   useEffect(() => {
//     getSuppliers()
//       .then(res => setSuppliers(res.data))
//       .catch(err => console.error('Error fetching suppliers:', err));

//     // Example orders (replace with API call if you have one)
//     setOrders([
//       { id:'PO-201', material:'Brass Rods', qty:'500 kg', status:'Delivered', date:'Mar 28, 2026' },
//       { id:'PO-198', material:'Steel Sheets', qty:'200 sheets', status:'In Transit', date:'Mar 30, 2026' },
//       { id:'PO-195', material:'Aluminum Bars', qty:'150 units', status:'Pending', date:'Apr 1, 2026' }
//     ]);
//   }, []);

//   // Add supplier
//   const handleAdd = async () => {
//     try {
//       const res = await addSupplier(form);
//       setSuppliers([...suppliers, res.data]);
//       setForm({ name:'', email:'', phone:'', location:'' });
//     } catch (err) {
//       console.error('Error adding supplier:', err);
//     }
//   };

//   return (
//     <div className="p-4 md:p-6">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//         <div className="bg-blue-600 text-white p-4 rounded shadow">
//           <h4 className="text-lg font-bold">Total Suppliers</h4>
//           <p className="text-2xl">{suppliers.length}</p>
//         </div>
//         <div className="bg-orange-500 text-white p-4 rounded shadow">
//           <h4 className="text-lg font-bold">Active Orders</h4>
//           <p className="text-2xl">{orders.length}</p>
//         </div>
//         <div className="bg-green-600 text-white p-4 rounded shadow">
//           <h4 className="text-lg font-bold">On-Time Rate</h4>
//           <p className="text-2xl">94%</p>
//         </div>
//       </div>

//       {/* Main Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Left: Suppliers */}
//         <div className="bg-white shadow rounded p-4 md:p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">Supplier Management</h2>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleAdd}>
//               Add Supplier
//             </button>
//           </div>
//           <input
//             className="border p-2 w-full rounded mb-4"
//             placeholder="Search suppliers..."
//           />

//           <div className="space-y-4">
//             {suppliers.map(s=>(
//               <div key={s.id} className="border rounded p-4 shadow-sm">
//                 <h3 className="font-bold text-lg">{s.name}</h3>
//                 <p>📧 {s.email}</p>
//                 <p>📞 {s.phone}</p>
//                 <p>📍 {s.location}</p>
//                 <p className={s.status==='On Time' ? 'text-green-600' : 'text-red-600'}>
//                   {s.status}
//                 </p>
//                 <p>Rating: {s.rating}/5.0</p>
//                 <p>Pending Orders: {s.pending_orders}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Recent Orders */}
//         <div className="bg-purple-600 text-white shadow rounded p-4 md:p-6">
//           <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
//           <ul className="space-y-3">
//             {orders.map(o=>(
//               <li key={o.id} className="bg-purple-700 p-3 rounded">
//                 <p className="font-semibold">{o.id} – {o.material}</p>
//                 <p>{o.qty}</p>
//                 <p>📅 {o.date}</p>
//                 <p>Status: <span className="font-bold">{o.status}</span></p>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6 flex flex-col sm:flex-row gap-3">
//             <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200">Place New Order</button>
//             <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200">View All Orders</button>
//             <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200">Supplier Reports</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SuppliersPage;



import { useEffect, useState } from "react";
import API from "../api/api";

export default function Suppliers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/suppliers").then(res => setData(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Suppliers</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.contact_phone}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}