import { FilterOption } from '@/models';

export const WorkOrderStati = ['Open', 'Closed', 'In Progress'];

export const isWorkOrderStatus = (option: Omit<FilterOption, 'Date'>) => {
  if (WorkOrderStati.includes(option as string)) {
    return true;
  }
  return false;
};
