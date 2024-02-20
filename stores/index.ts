import { filterConfigs } from '@/mockData/filterConfig';
import { FilterStore } from './filterStore';
import { createContext, useContext } from 'react';

const filterStore = new FilterStore(filterConfigs[7]);

export const FilterStoreContext = createContext(filterStore);

export const useFilterStore = () => useContext(FilterStoreContext);
