import SVG from "@/CommonComponent/SVG";
import { CartQuantityButton } from "@/Component/Applications/Ecommerce/Cart/CartQuantityButton";
import EmptyCart from "@/Component/Applications/Ecommerce/Cart/EmptyCart";
import { Cart, Checkout, GoToYourCart, Href, ImagePath, OrderTotal } from "@/Constant";
import { cartDetailsList } from "@/Data/Layout";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeCartData } from "@/Redux/Reducers/CartSlice";
import { CartType } from "@/Types/EcommerceType";
import { getallCardTotal } from "@/utils/Ecommerce.service";
import Image from "next/image";
import Link from "next/link";
import { X } from "react-feather";
import { Button, Col, Input, InputGroup } from "reactstrap";

export const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removeFromCart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <li className='cart-nav onhover-dropdown'>
      <div className='cart-box'>
        <SVG iconId='cart-drop' />
      </div>
      <div className='cart-dropdown onhover-show-div'>
        <h5 className='f-18 mb-0 dropdown-title'>{Cart}</h5>
        <>
          {cart && cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <div className='d-flex'>
                    <img className='img-fluid b-r-5 me-3 img-60' src={`${ImagePath}/ecommerce/${item.image}`} alt='' />
                    <div className='flex-grow-1'>
                      <span className='f-w-600'>{item.name}</span>
                      <CartQuantityButton item={item} />

                      <h6 className='font-primary'>
                        {symbol}
                        {item.price}
                      </h6>
                    </div>
                    <div className='close-circle' onClick={() => removeFromCart(item)}>
                      <Link className='bg-danger' href={Href}>
                        <X />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
              <li className='total'>
                <h6 className='mb-0'>
                  {OrderTotal} :{" "}
                  <span className='f-w-600 f-right'>
                    {symbol}
                    {getallCardTotal(cart)}
                  </span>
                </h6>
              </li>
              <li className='text-center pb-0'>
                <Link className='d-block mb-3 view-cart f-w-700' href={`/ecommerce/cart`}>
                  {GoToYourCart}
                </Link>
                <Link href={`/ecommerce/checkout`}>
                  <Button color='primary' className='view-checkout'>
                    {Checkout}
                  </Button>
                </Link>
              </li>
            </ul>
          ) : (
            <Col sm={12} className='empty-cart-cls text-center'>
            <Image height={172} width={172} src={`${ImagePath}/ecommerce/icon-empty-cart.png`} className='img-fluid mb-4 mt-4' alt='Empty Cart' />
            <h5>
              <strong>Your Cart is Empty</strong>
            </h5>
            <h6>Add something to make me happy</h6>
            <Link className='btn btn-primary cart-btn-transform m-t-15 mb-4' href='/ecommerce/product'>
              continue shopping
            </Link>
          </Col>
          )}
        </>
      </div>
    </li>
  );
};
