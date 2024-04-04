import { useEffect, useState } from "react";
import { Box, useMediaQuery, useToast } from "@chakra-ui/react";
import { Carrier, Filters } from "../utils/types";
import CarrierFilters from "../components/CarrierFilters";
import CarrierListing from "../components/CarrierListing";
import { defaultFilter } from "../utils";
import useIsMobile from "../utils/useIsMobile";

function CarrierSearchScreen() {
  const [carriers, setCarriers] = useState<Carrier[]>([]);
  const [filters, setFilters] = useState<Filters>(defaultFilter);
  const toast = useToast();

  useEffect(() => {
    fetchCarriers();
  }, []);

  const fetchCarriers = async () => {
    try {
      const res = await fetch(
        "https://mocki.io/v1/b174654c-dc79-4ca9-9be3-976a206e145c"
      );
      const data = await res.json();
      setCarriers(data?.carriers || []);
    } catch (err) {
      toast({
        title: "Error fetching carriers",
        description: "Error fetching carriers",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const isMobileView = useIsMobile()

  return (
    <Box display='flex' flexDirection={isMobileView ? 'column' : 'row'}>
      <CarrierFilters setFilters={setFilters} />
      <CarrierListing carriers={carriers} filters={filters} />
    </Box>
  );
}

export default CarrierSearchScreen;
