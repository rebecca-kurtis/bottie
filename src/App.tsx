import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//import components
import { Header } from "./components/_partials/_Header";
import { Footer } from "./components/_partials/_Footer";
import { Home } from "./pages/Home";
import { Plants } from "./pages/Plants";
import { PlantDetail } from "./pages/PlantDetail";
import { CardIndex } from "./pages/CardIndex";
import { Profile } from "./pages/Profile";
import { CartConfirm } from "./pages/CartConfirm";
import { Cart } from "./pages/Cart";

//import hooks
import { useLocalStorage } from "./hooks/useLocalStorage";
import { error } from "console";

const server = process.env.REACT_APP_SERVER + ':' + process.env.REACT_APP_SERVER_PORT;

function App() {
  //usestates are here
  const [products, setProducts] = useState([] as any[]);
  const [total, setTotal] = useState(0);
  
  // Set order state
  const [orderId, setOrderId] = useState("");
  const [cartId, setCartId] = useState("");
  const [cartItemId, setCartItemId] = useState("");
  const [recipientId, setRecipientId] = useState("");

  const [plant, setPlant] = useState({
    product_id: "",
    plant_name: "",
    image_url: "",
    description: "",
    price_in_cents: "",
  });

  const [recipient, setRecipient] = useState({
    first_name: "",
    last_name: "",
    relationship: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    country: "",
    postal_code: "",
  });

  const [allRecipients, setAllRecipients] = useState([] as any[]);

  // Set current cart state

  const [cart, setCart] = useLocalStorage("cart", [] as any[]);
  const [totalandTax, setTotalAndTax] = useLocalStorage("totalandTax", 0);
  const [tax, setTax] = useLocalStorage("tax", 0);
  
   // Product API call //
   //set the route
  const productsRoute = server + "/products";
  
    //call all the products for the app.
  useEffect(() => {
    axios.get(productsRoute)
    .then((response) => {
      const productList = [...response.data];
      setProducts(productList);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  // Set current user state
  const [user, setUser] = useLocalStorage("user", null);

  function updateUserStorage(currentUser: React.SetStateAction<null>) {
    setUser(currentUser);
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify(currentUser));
    console.log("user", user);
  }

  // Remove current user state
  function clearUserStorage() {
    localStorage.clear();
    setUser(null);
  }

  function sumArray(arr: number[]) {
    const totalReduce = arr.reduce((a, b) => {
      return a + b;
    });
    return totalReduce;
  }

  function getUserOrderInfo(dataCall: any) {
    setCart(dataCall);
    localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(dataCall));

    const totalSum = dataCall.map((cartItem: any) => cartItem.product_price);
    const total = Math.round(sumArray(totalSum)) / 100;
    setTotal(Math.round(total / 100));

    const tax = Math.round(total * 0.05 * 100) / 100;
    setTax(tax);
    localStorage.setItem("tax", JSON.stringify(tax));

    const totalandTax = Math.round((total + tax) * 100) / 100;
    setTotalAndTax(totalandTax);
    localStorage.setItem("totalandTax", JSON.stringify(totalandTax));
  }

  // Remove current user state
  function clearCartStorage() {
    localStorage.removeItem("cart");
    localStorage.removeItem("tax");
    localStorage.removeItem("totalandTax");
    setCart([] as any[]);
  }

  const recipientRoute = server + "/recipients";
  
  const recipientsRouteAdd = server + "/recipients/add";
  const recipientsRouteUpdate = server + "/recipients/update";

  console.log("allRecipients", allRecipients);

  const getAllRecipients = () => {
    axios
      .get(recipientRoute)
      .then((response) => {
        const recipientList = [...response.data];
        console.log(recipientList);
        return setAllRecipients(recipientList);
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error! ${error.message}`);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  //handle recipient post to the database
  const handleRecipientCardSubmit = () => {
    let result = "";
    let counter = 0;

    for (const obj of allRecipients) {
      if (obj.phone === recipient.phone) {
        result = "found";
        counter++;
      } else {
        result = "not found";
      }
      console.log("result", result);
      console.log("counter", counter);
    }
    console.log("result outside", result);
    console.log("counter outside", counter);

    if (counter > 0) {
      console.log("recipient found");
      axios
        .post(recipientsRouteUpdate, recipient)
        .then((response) => {
          const recipientIdSQL = response.data[0].recipient_id;
          setRecipientId(recipientIdSQL);
        })
        .catch((error) => {
          if (error.response) {
            alert(`Error! ${error.message}`);
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
    }

    if (counter === 0) {
      console.log("not found");
      axios
        .post(recipientsRouteAdd, recipient)
        .then((response) => {
          console.log("response.data", response.data.rows[0].recipient_id);
          const recipientIdSQL = response.data.rows[0].recipient_id;
          setRecipientId(recipientIdSQL);
        })
        .catch((error) => {
          if (error.response) {
            alert(`Error! ${error.message}`);
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
    }
  };

  const handlePreValidationStep = () => {
    const userId = user.user_id;
    const validateRoute = server + "/validate/" + userId;

    axios
      .get(validateRoute, userId)
      .then((response) => {
        const orderId = response.data[0].order_id;
        setOrderId(orderId);
        const cartId = response.data[0].cart_id;
        setCartId(cartId);
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error! ${error.message}`);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  function updateCartStorage(item: any) {
    let currentCart = JSON.parse(localStorage.getItem("cart") as any);

    if (currentCart === null) {
      currentCart = [];
    }
    localStorage.setItem("cartItem", JSON.stringify(item));
    currentCart.push(item);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    setCart(currentCart);
  }

  const cartCreation = () => {
    const productId = plant.product_id;

    const recipientIdNumber = recipientId;
    console.log(cart[0].cartid);
    const cart_id = cart[0].cartid;
    
    console.log(productId, recipientIdNumber, cart_id);
    const cartItem = {
      cart_id: cart_id,
      product_id: productId,
      recipient_id: recipientIdNumber,
    };

    const user_name_combined = user.first_name + user.last_name;
    const recipient_name_combined = recipient.first_name + recipient.last_name;
    const number = Number(plant.price_in_cents);
    const rightPriceForPlant = (number * 100).toString();

    const cartStorageItem = {
      cart_item: cartItemId,
      product_name: plant.plant_name,
      product_drawing: plant.image_url,
      product_price: rightPriceForPlant,
      user_name: user_name_combined,
      rname: recipient_name_combined,
      raddress: recipient.address,
      rcity: recipient.city,
      rstate: recipient.province,
      rpostal_code: recipient.postal_code,
    };

    const cartItemRoute = server + "/cart-items";

    axios
      .post(cartItemRoute, cartItem)
      .then((response) => {
        console.log("response from cartItems", response);
        const cartItemIdSQL = response.data[0].cart_item_id;
        setCartItemId(cartItemIdSQL);
        console.log("LocalStorage from cart creation", localStorage);

        updateCartStorage(cartStorageItem);
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error! ${error.message}`);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
     {console.log("cart", cart)}
      <BrowserRouter>
        <Header
          user={user}
          orderId={orderId}
          updateUserStorage={updateUserStorage}
          clearStorage={clearUserStorage}
          products={products}
          getUserOrderInfo={getUserOrderInfo}
          cart={cart}
        />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<Plants products={products} />} />
          <Route
            path="/products/:name"
            element={<PlantDetail products={products} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/card"
            element={
              <CardIndex
                plant={plant}
                setPlant={setPlant}
                recipient={recipient}
                setRecipient={setRecipient}
                products={products}
                user={user}
                cartCreation={cartCreation}
                handlePreValidationStep={handlePreValidationStep}
                handleRecipientCardSubmit={handleRecipientCardSubmit}
                getAllRecipients={getAllRecipients}
              />
            }
          />
          <Route path="/confirmation" element={<CartConfirm />} />
          <Route
            path="/cart"
            element={
              <Cart
                user={user}
                // cart={cart}
                // tax={tax}
                // totalandTax={totalandTax}
                clearCartStorage={clearCartStorage}
              />
            }
          />
          {/* <Route path="/card/configure" element={<CardConfigure />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
