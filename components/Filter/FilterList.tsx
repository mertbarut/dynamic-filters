import { FlatList } from 'react-native';
import { Filter } from './Filter';
import { useFilterStore } from '@/stores';
import { Box, Center } from '@gluestack-ui/themed';
import { FilterableWorkOrderAttribute } from '@/models';
import { useInputIndexIterator } from '../hooks/useInputIndexIterator';

type FilterListProps = ReturnType<typeof useInputIndexIterator>;

export const FilterList = ({
  incrementIndex,
  index,
  filtersToAskUser,
  isIterated,
}: FilterListProps) => {
  const { getFiltersAsSet } = useFilterStore();
  const data = getFiltersAsSet();

  return (
    <Center my="$4">
      <FlatList<(typeof data)[number]>
        horizontal
        data={data}
        keyExtractor={i => i[0]}
        renderItem={i => {
          const key = i.item[0];
          const requiresInput = !isIterated && filtersToAskUser[index] === key;
          return (
            <Filter
              key={key}
              label={key as FilterableWorkOrderAttribute}
              currentStep={index + 1}
              totalStepCount={data.length}
              requiresInput={requiresInput}
              incrementStep={incrementIndex}
            />
          );
        }}
        extraData={isIterated}
        ItemSeparatorComponent={() => <Box width="$2" />}
      />
    </Center>
  );
};
