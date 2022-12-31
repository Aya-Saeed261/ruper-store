// React router dom
import { NavLink } from "react-router-dom";

// Imported components
import Item from "./item";

const ItemsTable = ({ cart, onAmountChange, OnRemoveFromCart }) => {
  return (
    <div className="table-responsive-xl">
      <table className="table mb-0 main-border">
        <thead>
          <tr>
            <th scope="col" className="fw-500 p-3 pe-1">
              Product
            </th>
            <th scope="col" className="fw-500 py-3 ps-1">
              Price
            </th>
            <th scope="col" className="fw-500 py-3 ps-1">
              Quantity
            </th>
            <th scope="col" className="fw-500 py-3 ps-1">
              Subtotal
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <Item
              key={product.cartId}
              product={product}
              onAmountChange={onAmountChange}
              OnRemoveFromCart={OnRemoveFromCart}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={1} className="p-3 pe-1">
              <form
                action="#"
                onSubmit={(e) => e.preventDefault()}
                className="row m-0"
              >
                <div className="col-8 ps-0 pe-1">
                  <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code"
                    className="d-block w-100 p-2 main-border"
                  />
                </div>
                <div className="col-4 pe-0 ps-1">
                  <input
                    type="submit"
                    value="Apply coupon"
                    className="w-100 h-100 opacity-trans text-uppercase fw-500 border-0 letter-space-1 bg-black text-white"
                  />
                </div>
              </form>
            </td>
            <td colSpan={2} className="py-3 ps-5">
              <NavLink to="/shop" className="text-body text-capitalize">
                Continue shopping
              </NavLink>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ItemsTable;
