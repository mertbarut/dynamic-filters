import { useFilterStore } from '@/stores';
import { useState } from 'react';

type UseInputIndexIteratorProps = {
  initialInputOptions: ReturnType<typeof useFilterStore>['askUser'];
};

export const useInputIndexIterator = ({ initialInputOptions }: UseInputIndexIteratorProps) => {
  const [filtersToAskUser, setFiltersToAskUser] = useState(initialInputOptions);
  void setFiltersToAskUser;
  const [index, setIndex] = useState(0);
  const [isIterated, setIterated] = useState(initialInputOptions.length === 0);
  const isNoInputRequired = filtersToAskUser.length === 0;
  const isAtLastItem = index + 1 === filtersToAskUser.length;

  const incrementIndex = () => {
    if (isNoInputRequired || isAtLastItem) {
      setIterated(true);
      return;
    }
    setIndex(index + 1);
  };

  return {
    filtersToAskUser,
    index,
    isIterated,
    incrementIndex,
  };
};
