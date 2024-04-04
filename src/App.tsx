import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CarrierSearchScreen from "./screens/CarrierSearchScreen";
import BookingConfirmScreen from "./screens/BookingConfirmScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CarrierSearchScreen />,
  },
  {
    path: "/:carrierId/booking/",
    element: <BookingConfirmScreen />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
