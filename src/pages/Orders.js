import { useEffect, useState } from "react";
import API from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Orders error:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white p-6 rounded-lg border">

        <h2 className="text-xl font-semibold mb-4">Orders</h2>

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border text-left">Order ID</th>
              <th className="p-2 border text-left">Product</th>
              <th className="p-2 border text-left">Supplier</th>
              <th className="p-2 border text-left">Quantity</th>
              <th className="p-2 border text-left">Delivery Date</th>
              <th className="p-2 border text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{o.order_id}</td>
                  <td className="p-2 border">{o.product}</td>
                  <td className="p-2 border">{o.customer}</td>
                  <td className="p-2 border">{o.quantity}</td>
                  <td className="p-2 border">{o.delivery_date}</td>

                  <td className="p-2 border">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        o.inventory_status === "Available"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {o.inventory_status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

    </div>
  );
}
