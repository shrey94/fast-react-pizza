import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import store from "../../store";
import { useDispatch, useSelector, useStore } from "react-redux";
import { fetchAddress } from "../user/userSlice";
import {
  clearCart,
  getCart,
  getFinalPrice,
  getTotalCartQuantity,
} from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isSubmitting = navigation.state === "submitting";
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  const formerrors = useActionData();
  const cart = useSelector(getCart);
  // console.log(cart);
  const totalCartPrice = useSelector(getFinalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-8">Ready to order? Lets go!</h2>
      {/* dispatching our thunk for geolocation */}

      <Form method="POST">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="grow rounded-full border border-stone-200 p-1 text-sm 
              focus:outline-none focus:ring focus:ring-yellow-300 transition-all"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="w-full rounded-full border border-stone-200 p-1 text-sm 
              focus:outline-none focus:ring focus:ring-yellow-300 transition-all"
              type="tel"
              name="phone"
              required
            />
            {formerrors?.phone && (
              <p
                className="text-xs mt-2 text-red-700 rounded-md
           bg-red-100 p-1"
              >
                {formerrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="w-full rounded-full border border-stone-200 p-1 text-sm 
              focus:outline-none focus:ring focus:ring-yellow-300 transition-all"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === "error" && (
              <p
                className="text-xs mt-2 text-red-700 rounded-md
           bg-red-100 p-1"
              >
                {errorAddress}
              </p>
            )}
          </div>
          <>
            {!position.latitude && !position.longitute && (
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  //because inside a form
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                GET POSITION
              </Button>
            )}
          </>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 
              focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input
            className="input"
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          ></input>
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          ></input>
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting ? "Placing Order" : `Order now from $${totalPrice}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  // console.log;

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us your correct phone number";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
  // return null;
}

export default CreateOrder;
