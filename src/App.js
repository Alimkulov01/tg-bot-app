import { RouterProvider } from "react-router-dom";
import router from "./router";
import { persistor, store } from "./redux-store/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ReactHotToast from "./components/Toaster";
import AppLayout from "./components/Layouts/App-Layout";
import { Suspense } from "react";
import PageLoaderComponent from "./components/Utils/PageLoader";

// Import AOS
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useMediaQuery } from "@mui/material";

function App() {
  // Initialize AOS on component mount

  // const isLargeScreen = useMediaQuery("(min-width:600px)");
  // useEffect(() => {
  //   if (isLargeScreen) {
  //     AOS.init({
  //       duration: 800,
  //       easing: "ease-in-out",
  //       once: true,
  //     });
  //   }
  //   AOS.refresh();
  // }, []);

  return (
    <Suspense fallback={<PageLoaderComponent />}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <AppLayout>
            <RouterProvider router={router} />
            <ReactHotToast />
          </AppLayout>
        </PersistGate>
      </ReduxProvider>
    </Suspense>
  );
}

export default App;
