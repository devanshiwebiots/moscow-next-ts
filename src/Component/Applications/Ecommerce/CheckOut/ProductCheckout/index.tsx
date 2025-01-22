import { Products, Subtotal, Total } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { getCartTotal, getallCardTotal } from "@/utils/Ecommerce.service";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import CheckPayment from "./CheckPayment";
import CheckoutShipping from "./CheckoutShipping";

const ProductCheckout = () => {
  const { cart } = useAppSelector((state) => state.cartData);

  return (
    <Col xl="6" sm="12">
      <div className="checkout-details">
        <div className="order-box">
          <div className="title-box">
            <div className="checkbox-title">
              <h4>{Products}</h4>
              <span>{Total}</span>
            </div>
          </div>
          <ListGroup className="qty">
            {cart && cart.map((data, i) => (
              <ListGroupItem key={i}>{data.name} x {data.total} <span>$ {getCartTotal(data)}</span></ListGroupItem>
            ))}
          </ListGroup>
          <ul className="sub-total">
            <li>{Subtotal} <span className="count">$ {getallCardTotal(cart)}</span></li>
            <CheckoutShipping />
          </ul>
          <ul className="sub-total total">
            <li>{Total} <span className="count">$ {getallCardTotal(cart)}.00</span></li>
          </ul>
          <CheckPayment />
        </div>
      </div>
    </Col>
  );
};

export default ProductCheckout;
