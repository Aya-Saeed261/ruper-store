// Imported components
import Loader from "../global/loader";

const Orders = ({ user }) => {
  return user ? (
    <div className="table-responsive-xl">
      <table className="orders table orders-table main-border lh-1">
        <thead>
          <tr className="px-2">
            <th scope="col" className="fw-500 py-3 ps-3">
              Order
            </th>
            <th scope="col" className="fw-500 py-3">
              Date
            </th>
            <th scope="col" className="fw-500 py-3">
              Status
            </th>
            <th scope="col" className="fw-500 py-3">
              Total
            </th>
            <th scope="col" className="fw-500 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="gray-text">
          {user.orders.map((order) => (
            <tr key={order.number}>
              <td className="fw-normal ps-3 py-3">#{order.number}</td>
              <td className="py-3">{order.date}</td>
              <td className="text-capitalize py-3">{order.status}</td>
              <td className="py-3">
                ${order.cost.toFixed(2)} for {order.items} item
                {order.items > 1 ? "s" : ""}
              </td>
              <td className="py-3">
                <button type="button" className="btn p-0 border-0 lh-1">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <Loader />
  );
};

export default Orders;
