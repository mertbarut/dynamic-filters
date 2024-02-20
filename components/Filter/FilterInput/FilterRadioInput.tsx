import {
  RadioGroup,
  VStack,
  Radio,
  RadioIndicator,
  RadioIcon,
  CircleIcon,
  RadioLabel,
} from '@gluestack-ui/themed';
import React from 'react';

type FilterRadioInputProps = {
  labels: string[];
  value: string | undefined;
  setValue: (value: string) => void;
};

export const FilterRadioInput = ({ labels, setValue, value }: FilterRadioInputProps) => {
  return (
    <RadioGroup value={value} onChange={setValue}>
      <VStack space="sm">
        {labels.map(label => (
          <Radio key={label} value={label}>
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>{label}</RadioLabel>
          </Radio>
        ))}
      </VStack>
    </RadioGroup>
  );
};
