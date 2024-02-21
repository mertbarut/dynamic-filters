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
  VStack,
  Center,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@gluestack-ui/themed';
import { FilterInputFactory } from './FilterInput/FilterInputFactory';
import { useEffect, useState } from 'react';
import { useFilterStore } from '@/stores';
import { getLabelSupplement } from '@/utils';
import { predetermineInput } from './utils/predetermineInput';
import { setOptionsField } from './utils/setOptionsField';
import { Platform } from 'react-native';

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
  const labelSupplement = getLabelSupplement(label, input);

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
    <>
      {Platform.OS === 'ios' ? (
        <Popover
          isOpen={requiresInput}
          placement="bottom"
          size="md"
          trigger={triggerProps => {
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
                <Button onPress={saveFilter} isDisabled={!input} bgColor="$emerald500">
                  <ButtonText>
                    {currentStep === totalStepCount ? 'Apply Filter' : 'Next'}
                  </ButtonText>
                </Button>
              </PopoverFooter>
            </Center>
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <Button size="xs" variant={!labelSupplement ? 'outline' : 'solid'}>
            <ButtonText>
              {capitalizedLabel}
              {labelSupplement}
            </ButtonText>
          </Button>
          <Modal isOpen={requiresInput}>
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader>
                <Heading size="lg">Filter Work Orders by {capitalizedLabel}</Heading>
              </ModalHeader>
              <ModalBody>
                <FilterInputFactory
                  label={label}
                  input={input}
                  setInput={setInput}
                  saveFilter={saveFilter}
                />
              </ModalBody>
              <ModalFooter>
                <Button onPress={saveFilter} isDisabled={!input} bgColor="$emerald500">
                  <ButtonText>
                    {currentStep === totalStepCount ? 'Apply Filter' : 'Next'}
                  </ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};
