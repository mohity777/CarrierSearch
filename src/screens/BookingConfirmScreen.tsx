import {
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Text,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import CarrierCard from "../components/CarrierCard";
import { BookingConfirmLocationParams } from "../utils/types";
import { useRef, useState } from "react";
import BookingConfirmed from "../components/BookingConfirmed";

function BookingConfirmScreen() {
  const location: { state: BookingConfirmLocationParams } = useLocation();
  const { name } = location?.state?.carrier
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const cancelRef = useRef<any>();

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      {isConfirmed ? (
        <BookingConfirmed text={name} />
      ) : (
        <>
          <CarrierCard
            item={location?.state?.carrier}
            filters={location?.state?.filters}
            hideBtn={true}
          />
          <Button
            onClick={onOpen}
            variant="solid"
            colorScheme="blue"
            alignSelf="center"
          >
            Confirm Booking
          </Button>
          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogHeader>Confirm Booking</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Are you sure you want to confirm booking for{" "}
                <Text fontWeight="bold">{name}?</Text>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button
                  colorScheme="blue"
                  ml={3}
                  onClick={() => setIsConfirmed(true)}
                >
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </Box>
  );
}

export default BookingConfirmScreen;
