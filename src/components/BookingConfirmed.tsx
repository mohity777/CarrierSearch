import { Box, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import TickAnimation from "../assets/tick.json";
import RibbonAnimation from "../assets/ribbon.json";

const BookingConfirmed = ({ text }: { text: string }) => {
  return (
    <Box>
      <Box position={"relative"}>
        <Lottie
          style={{ position: "absolute" }}
          animationData={RibbonAnimation}
          loop={false}
        />
        <Lottie animationData={TickAnimation} loop={false} />
        <Text fontSize="30" fontWeight="bold" textAlign="center">
          Congratulations
        </Text>
        <Text fontSize="20" fontWeight="400" mt="1" textAlign="center">
          Booking Confirmed for {text}
        </Text>
      </Box>
    </Box>
  );
};

export default BookingConfirmed;
