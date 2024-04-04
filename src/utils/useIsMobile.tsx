import { useMediaQuery } from "@chakra-ui/react";

const useIsMobile = () => {
  const [isMobileView] = useMediaQuery("(max-width: 768px)");
  return isMobileView;
};

export default useIsMobile;
