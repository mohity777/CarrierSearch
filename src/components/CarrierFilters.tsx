// components/Filters.tsx
import React, { useState } from "react";
import {
  Heading,
  Checkbox,
  Box,
  Divider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Button,
  Stack,
} from "@chakra-ui/react";
import { defaultFilter, specialReqFilter } from "../utils";
import useIsMobile from "../utils/useIsMobile";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { FiltersProps } from "../utils/types";

const CarrierFilters: React.FC<FiltersProps> = ({ setFilters }) => {
  const {
    cost: dCost,
    rating: dRating,
    delivery: dDelivery,
    specialRequirements: dSpecialReq,
  } = defaultFilter;
  const [cost, setCost] = useState(dCost);
  const [rating, setRating] = useState(dRating);
  const [delivery, setDelivery] = useState(dDelivery);
  const [specialReqs, setSpecialReqs] = useState(dSpecialReq);
  const isMobileView = useIsMobile();

  const [expanded, setExpanded] = useState(false);

  const onFilterReset = () => {
    setFilters(defaultFilter);
    setCost(dCost);
    setRating(dRating);
    setDelivery(dDelivery);
    setSpecialReqs(dSpecialReq);
  };

  const onFilterApply = () => {
    setFilters({
      cost,
      rating,
      delivery,
      specialRequirements: specialReqs,
    });
  };

  const onChangeSpecialReqs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (checked) {
      setSpecialReqs((prevSpecialReqs) => [...prevSpecialReqs, id]);
    } else {
      setSpecialReqs((prevSpecialReqs) =>
        prevSpecialReqs.filter((item) => item !== id)
      );
    }
  };

  const FilterIcon = isMobileView
    ? expanded
      ? CloseIcon
      : HamburgerIcon
    : SearchIcon;

  const onClickFilterIcon = () => {
    if (!isMobileView) return;
    setExpanded((p) => !p);
  };

  return (
    <Box
      display="flex"
      w={isMobileView ? "100%" : "20%"}
      flexDirection="column"
      bgColor="grey"
      h={isMobileView ? "60%" : "100vh"}
      minWidth="fit-content"
      pt={5}
      pl={6}
      pr={6}
      position={isMobileView ? "static" : "fixed"}
    >
      <Heading size="md" mb={5} textAlign={isMobileView ? "left" : "center"}>
        <FilterIcon w={4} h={4} mb={1} onClick={onClickFilterIcon} mr={2} />
        Filters
      </Heading>

      {/* Cost Filter */}
      {!isMobileView || expanded ? (
        <Stack>
          <Box>
            <Heading size="sm" textAlign={"left"} m={2}>
              Cost: {cost.join("-")}
            </Heading>
            <RangeSlider
              min={dCost[0]}
              max={dCost[1]}
              step={20000}
              defaultValue={dCost}
              onChange={setCost}
              value={cost}
            >
              <RangeSliderMark value={dCost[0]} mt="2" ml="-1" fontSize="sm">
                {dCost[0]}
              </RangeSliderMark>
              <RangeSliderMark
                value={dCost[1] / 2}
                mt="2"
                ml="-7"
                fontSize="sm"
              >
                {dCost[1] / 2}
              </RangeSliderMark>
              <RangeSliderMark
                value={dCost[1]}
                textAlign="left"
                mt="2"
                ml="-10"
                fontSize="sm"
              >
                {dCost[1]}
              </RangeSliderMark>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Box>

          <Divider mt={10} mb={10} />

          {/* Rating Filter */}
          <Box>
            <Heading size="sm" textAlign={"left"} m={2}>
              Carrier Rating: {rating.join(" to ")}
            </Heading>
            <RangeSlider
              min={dRating[0]}
              max={dRating[1]}
              step={0.5}
              defaultValue={dRating}
              onChange={setRating}
              value={rating}
            >
              <RangeSliderMark value={dRating[0]} mt="2" ml="-1" fontSize="sm">
                {dRating[0]}
              </RangeSliderMark>
              <RangeSliderMark
                value={dRating[1] / 2}
                mt="2"
                ml="-2.5"
                fontSize="sm"
              >
                {dRating[1] / 2}
              </RangeSliderMark>
              <RangeSliderMark
                value={dRating[1]}
                textAlign="left"
                mt="2"
                ml="-1"
                fontSize="sm"
              >
                {dRating[1]}
              </RangeSliderMark>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Box>

          <Divider mt={10} mb={10} />

          {/* On-time delivery Filter */}
          <Box>
            <Heading size="sm" textAlign={"left"} m={2}>
              On-time delivery %: {delivery.join(" to ")}
            </Heading>
            <RangeSlider
              min={dDelivery[0]}
              max={dDelivery[1]}
              step={10}
              defaultValue={dDelivery}
              onChange={setDelivery}
              value={delivery}
            >
              <RangeSliderMark
                value={dDelivery[0]}
                mt="2"
                ml="-1"
                fontSize="sm"
              >
                {dDelivery[0]}%
              </RangeSliderMark>
              <RangeSliderMark
                value={dDelivery[1] / 2}
                mt="2"
                ml="-2.5"
                fontSize="sm"
              >
                {dDelivery[1] / 2}%
              </RangeSliderMark>
              <RangeSliderMark
                value={dDelivery[1]}
                textAlign="left"
                mt="2"
                ml="-5"
                fontSize="sm"
              >
                {dDelivery[1]}%
              </RangeSliderMark>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Box>

          <Divider mt={10} mb={5} />

          {/* Special Reqs Filter*/}
          <Box flexDirection="column" display="flex">
            <Heading size="sm" textAlign={"left"} m={2}>
              Special Reqs.
            </Heading>
            {specialReqFilter.map((item) => (
              <Checkbox
                id={item.label}
                mr={5}
                ml={5}
                key={item.key}
                isChecked={specialReqs.includes(item.label)}
                onChange={onChangeSpecialReqs}
              >
                {item.label}
              </Checkbox>
            ))}
          </Box>

          <Button mt="10" mb="5" onClick={onFilterApply}>
            Apply
          </Button>
          <Button mb="10" onClick={onFilterReset}>
            Reset
          </Button>
        </Stack>
      ) : null}
    </Box>
  );
};

export default CarrierFilters;
