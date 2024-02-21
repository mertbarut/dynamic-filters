import { FilterableWorkOrderAttribute } from '@/models';
import DateTimePicker from '@react-native-community/datetimepicker';
import { WorkOrderColors, WorkOrderStati, WorkOrderTypes } from '@/utils';
import { FilterRadioInput } from './FilterRadioInput';
import { Box } from '@gluestack-ui/themed';

type FilterInputFactoryProps = {
  label: FilterableWorkOrderAttribute;
  input: string | Date | undefined;
  setInput: (value: string | Date) => void;
  saveFilter?: () => void;
};

export const FilterInputFactory = ({
  label,
  setInput,
  input,
  saveFilter,
}: FilterInputFactoryProps) => {
  const determineOutput = () => {
    if (!label) {
      return <></>;
    }

    if (label === FilterableWorkOrderAttribute.StartDate) {
      return (
        <DateTimePicker
          mode="date"
          value={(input as Date) ?? new Date()}
          onChange={(e, date) => {
            setInput(date as Date);
            saveFilter?.();
          }}
          negativeButton={{ label: '', textColor: 'red' }}
        />
      );
    }
    if (label === FilterableWorkOrderAttribute.EndDate) {
      return (
        <DateTimePicker
          mode="date"
          value={(input as Date) ?? new Date()}
          onChange={(e, date) => {
            setInput(date as Date);
            saveFilter?.();
          }}
          negativeButton={{ label: '', textColor: 'red' }}
        />
      );
    }
    if (label === FilterableWorkOrderAttribute.Status) {
      return (
        <FilterRadioInput labels={WorkOrderStati} value={input as string} setValue={setInput} />
      );
    }
    if (label === FilterableWorkOrderAttribute.Type) {
      return (
        <FilterRadioInput labels={WorkOrderTypes} value={input as string} setValue={setInput} />
      );
    }
    if (label === FilterableWorkOrderAttribute.Color) {
      return (
        <FilterRadioInput labels={WorkOrderColors} value={input as string} setValue={setInput} />
      );
    }
  };

  const output = determineOutput();

  return <Box>{output}</Box>;
};
