import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { isMatch } from "../utils";
import { Rating } from "react-simple-star-rating";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Carrier, CarrierCardProps } from "../utils/types";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../utils/useIsMobile";

const CarrierCard = ({ item, filters, hideBtn }: CarrierCardProps) => {
  const isCostMatch =
    filters?.cost?.length && isMatch(item.cost, filters?.cost);

  const isRatingMatch =
    filters?.rating?.length && isMatch(item?.rating, filters?.rating);

  const isDeliveryMatch =
    filters?.delivery?.length &&
    isMatch(item?.onTimeDeliveryPercentage * 100, filters?.delivery);

  const isSpecialReqMatch = filters?.specialRequirements?.length
    ? item?.specialRequirements?.filter((it) =>
        filters?.specialRequirements?.includes(it)
      )
    : [];

  const isRecommended =
    isCostMatch ||
    isRatingMatch ||
    isDeliveryMatch ||
    isSpecialReqMatch?.length;

  const navigate = useNavigate();
  const isMobileView = useIsMobile();

  const navigateToBooking = (carrier: Carrier) => {
    navigate(`/${item.id}/booking`, {
      state: {
        carrier,
        filters,
      },
    });
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="filled"
      m="5"
      className="card"
      w={isMobileView ? 300 : 800}
      boxShadow="0 2px 6px 0 rgba(0, 0, 0, 0.5), 0 6px 15px 0 rgba(0, 0, 0, 0.19);"
      alignSelf="center"
    >
      <CardBody>
        <Heading size="md">{item.name}</Heading>

        <Text pt="2">Cost:</Text>
        <Text pb="2">{item.cost}</Text>
        <Text pt="2">Rating:</Text>
        <Box flexDirection="row" display="flex">
          <Rating
            size={20}
            initialValue={item.rating}
            readonly={true}
            allowFraction={true}
            SVGstyle={{ display: "inline-block" }}
          />
          <Text ml={1} size="small">
            {item.rating}
          </Text>
        </Box>

        <Text pt="2">On Time Delivery Percentage:</Text>
        <Text pb="2">{item.onTimeDeliveryPercentage * 100}</Text>

        <Text pt="2">Special Requiremts:</Text>
        <Text pb="2">
          {item.specialRequirements?.map((it) => (
            <Text>{it}</Text>
          ))}
        </Text>
      </CardBody>
      {!!isRecommended && (
        <Stack p="5">
          <Tag size="lg" colorScheme="green" borderRadius="full">
            <TagLabel>Recommended</TagLabel>
          </Tag>
          <List spacing={3}>
            {isCostMatch && (
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Cost
              </ListItem>
            )}
            {isDeliveryMatch && (
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                On-time delivery
              </ListItem>
            )}
            {isRatingMatch && (
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Rating
              </ListItem>
            )}
            {isSpecialReqMatch?.length && (
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Special Req: {isSpecialReqMatch.join(", ")}
              </ListItem>
            )}
          </List>
        </Stack>
      )}
      {!hideBtn && (
        <CardFooter alignSelf="flex-end">
          <Button
            onClick={() => navigateToBooking(item)}
            variant="solid"
            colorScheme="blue"
            alignSelf="center"
          >
            Book Now
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CarrierCard;
