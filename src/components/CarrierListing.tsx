import React from "react";
import { Heading, Box, useMediaQuery } from "@chakra-ui/react";
import { CarrierListingProps } from "../utils/types";
import CarrierCard from "./CarrierCard";
import useIsMobile from "../utils/useIsMobile";

const CarrierListing: React.FC<CarrierListingProps> = ({
  carriers,
  filters,
}) => {
    const isMobileView = useIsMobile()
    return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position={isMobileView ? "static" : "absolute"}
      left={isMobileView ? 0 : "20%"}
      w={isMobileView ? "100%" : "80%"}
    >
      <Heading size="lg" pt="5" pb="0">
        Carriers
      </Heading>
      {carriers?.map((item) => (
        <CarrierCard item={item} filters={filters} />
      ))}
    </Box>
  );
};

export default CarrierListing;
