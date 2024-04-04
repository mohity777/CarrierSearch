export const specialReqFilter = [
  {
    key: "1",
    label: "Refrigerated",
  },
  {
    key: "2",
    label: "Hazardous Materials",
  },
  {
    key: "3",
    label: "Eco-Friendly",
  },
  {
    key: "4",
    label: "Oversized Loads",
  },
];

export const defaultFiltersRange = {
  cost: {
    min: 0,
    max: 200000,
  },
  ratings: {
    min: 0,
    max: 5,
  },
  delivery: {
    min: 0,
    max: 100,
  },
};

export const defaultFilter = {
    cost: [defaultFiltersRange.cost.min, defaultFiltersRange.cost.max],
    rating: [
        defaultFiltersRange.ratings.min,
        defaultFiltersRange.ratings.max,
      ],
  delivery: [
    defaultFiltersRange.delivery.min,
    defaultFiltersRange.delivery.max,
  ],
  specialRequirements: specialReqFilter.map((it) => it.label),
}

export const isMatch = (value: number, [min, max]: number[]) =>
  value >= min && value <= max;
