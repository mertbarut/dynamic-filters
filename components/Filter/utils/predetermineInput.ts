import { FilterableWorkOrderAttribute, FilterOptions } from '@/models';

export const predetermineInput = (
  options: FilterOptions,
  label: FilterableWorkOrderAttribute,
  setInput: (item: string | Date | undefined) => void,
) => {
  if (options.status?.value && label === FilterableWorkOrderAttribute.Status) {
    return setInput(options.status.value);
  }
  if (options.type?.value && label === FilterableWorkOrderAttribute.Type) {
    return setInput(options.type.value);
  }
  if (options.color?.value && label === FilterableWorkOrderAttribute.Color) {
    return setInput(options.color.value);
  }
  if (options.startDate?.value && label === FilterableWorkOrderAttribute.StartDate) {
    return setInput(options.startDate.value);
  }
  if (options.endDate?.value && label === FilterableWorkOrderAttribute.EndDate) {
    return setInput(options.endDate.value);
  }
};
