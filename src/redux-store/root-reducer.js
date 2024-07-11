import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import carouselReducer from "./reducers/carousel-reducer";
import categoryReducer from "./reducers/category-reducer";
import productsReducer from "./reducers/products-reducer";
import cartReducer from "./reducers/cart-reducer";
import settingsReducer from "./reducers/settingsReducer";
import wishlistReducer from "./reducers/wishlist-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  carousel: carouselReducer,
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  settings: settingsReducer,
  wishlist: wishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);
