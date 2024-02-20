import { FilterOption } from '@/models';

export const WorkOrderColors = ['blue', 'purple', 'black'];

export const isWorkOrderColor = (option: Omit<FilterOption, 'Date'>) => {
  if (WorkOrderColors.includes(option as string)) {
    return true;
  }
  return false;
};
