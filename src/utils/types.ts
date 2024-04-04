export interface Carrier {
  id: string;
  name: string;
  rating: number;
  onTimeDeliveryPercentage: number;
  cost: number;
  specialRequirements: string[];
}

export interface CarrierListingProps {
  carriers: Carrier[];
  filters: Filters;
}

export interface Filters {
  cost: number[];
  rating: number[];
  delivery: number[];
  specialRequirements: string[];
}

export interface BookingConfirmLocationParams {
    carrier: Carrier;
    filters: Filters
}

export interface CarrierCardProps {
  item: Carrier;
  filters: Filters;
  hideBtn?: boolean;
}

export interface FiltersProps {
  setFilters: (filters: any) => void; // Define the type for filters as per your need
}