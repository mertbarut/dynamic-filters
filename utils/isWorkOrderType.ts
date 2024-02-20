import { FilterOption } from '@/models';

export const WorkOrderTypes = ['Installation', 'Maintenance', 'Failure'];

export const isWorkOrderType = (option: Omit<FilterOption, 'Date'>) => {
  if (WorkOrderTypes.includes(option as string)) {
    return true;
  }
  return false;
};
