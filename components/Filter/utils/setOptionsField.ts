import {
  FilterableWorkOrderAttribute,
  WorkOrderColor,
  WorkOrderStatus,
  WorkOrderType,
} from '@/models';
import { useFilterStore } from '@/stores';

type FilterStoreHook = ReturnType<typeof useFilterStore>;

export const setOptionsField = (
  label: FilterableWorkOrderAttribute,
  input: Date | string | undefined,
  set: {
    status: FilterStoreHook['setStatus'];
    type: FilterStoreHook['setType'];
    color: FilterStoreHook['setColor'];
    startDate: FilterStoreHook['setStartDate'];
    endDate: FilterStoreHook['setEndDate'];
  },
) => {
  if (!input) {
    return;
  }
  if (label === FilterableWorkOrderAttribute.Status) {
    return set.status({ askUser: false, value: input as WorkOrderStatus });
  }
  if (label === FilterableWorkOrderAttribute.Type) {
    return set.type({ askUser: false, value: input as WorkOrderType });
  }
  if (label === FilterableWorkOrderAttribute.Color) {
    return set.color({ askUser: false, value: input as WorkOrderColor });
  }
  if (label === FilterableWorkOrderAttribute.StartDate) {
    return set.startDate({ askUser: false, value: input as Date });
  }
  if (label === FilterableWorkOrderAttribute.EndDate) {
    return set.endDate({ askUser: false, value: input as Date });
  }
};
