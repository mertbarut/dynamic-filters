import { FilterableWorkOrderAttribute } from '@/models';
import dayjs from 'dayjs';

export const getLabelSupplement = (
  label: FilterableWorkOrderAttribute,
  input: string | Date | undefined,
) => {
  if (!input) {
    return null;
  }
  if (
    label === FilterableWorkOrderAttribute.Status ||
    label === FilterableWorkOrderAttribute.Type ||
    label === FilterableWorkOrderAttribute.Color
  ) {
    return `: ${input.toString()}`;
  }
  if (
    label === FilterableWorkOrderAttribute.StartDate ||
    label === FilterableWorkOrderAttribute.EndDate
  ) {
    return `: ${dayjs(input).format('DD/MM/YY HH:mm').toString()}`;
  }
  return null;
};
