import { FilterableWorkOrderAttribute } from '@/models';
import { capitalize } from '@/utils/capitalize';
import {
  Popover,
  Button,
  ButtonText,
  PopoverBackdrop,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  Heading,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  VStack,
  Center,
} from '@gluestack-ui/themed';
import { FilterInputFactory } from './FilterInput/FilterInputFactory';
import { useEffect, useState } from 'react';
import { useFilterStore } from '@/stores';
import { getLabelSupplement } from '@/utils';
import { predetermineInput } from './utils/predetermineInput';
import { setOptionsField } from './utils/setOptionsField';

type FilterProps = {
  label: FilterableWorkOrderAttribute;
  currentStep: number;
  totalStepCount: number;
  incrementStep: () => void;
  requiresInput: boolean;
};

export const Filter = ({
  label,
  currentStep,
  totalStepCount,
  incrementStep,
  requiresInput,
}: FilterProps) => {
  const { setStatus, setType, setColor, setStartDate, setEndDate, getOptions } = useFilterStore();
  const [input, setInput] = useState<string | Date | undefined>();
  const capitalizedLabel = capitalize(label);
  const options = getOptions();

  useEffect(() => {
    predetermineInput(options, label, setInput);
  }, [options]);

  const saveFilter = () => {
    incrementStep();
    setOptionsField(label, input, {
      status: setStatus,
      type: setType,
      color: setColor,
      startDate: setStartDate,
      endDate: setEndDate,
    });
  };

  return (
    <Popover
      isOpen={requiresInput}
      placement="bottom"
      size="md"
      trigger={triggerProps => {
        const labelSupplement = getLabelSupplement(label, input);
        return (
          <Button size="xs" variant={!labelSupplement ? 'outline' : 'solid'} {...triggerProps}>
            <ButtonText>
              {capitalizedLabel}
              {labelSupplement}
            </ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>
          <VStack>
            <Heading size="sm">Filter Work Orders by {capitalizedLabel}</Heading>
          </VStack>
        </PopoverHeader>
        <PopoverBody>
          <FilterInputFactory label={label} input={input} setInput={setInput} />
        </PopoverBody>
        <Center>
          <PopoverFooter>
            <ButtonGroup space="md">
              <Button onPress={saveFilter} isDisabled={!input} bgColor="$emerald500">
                <ButtonText>{currentStep === totalStepCount ? 'Apply Filter' : 'Next'}</ButtonText>
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </Center>
      </PopoverContent>
    </Popover>
  );
};
