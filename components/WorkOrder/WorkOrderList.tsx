import { WorkOrder as WorkOrderModel } from '@/models';
import { FlatList } from 'react-native';
import { WorkOrder } from './WorkOrder';
import { generateWorkOrders } from '@/mockData/generateWorkOrders';
import { FilterList } from '../Filter/FilterList';
import { useFilterStore } from '@/stores';
import { useInputIndexIterator } from '../hooks/useInputIndexIterator';
import { useEffect, useMemo, useState } from 'react';
import { filterWorkOrders } from '@/utils/filterWorkOrders';

export const WorkOrderList = () => {
  const { setConfig, config, askUser } = useFilterStore();
  const generatedData = useMemo(() => generateWorkOrders(200), []);
  const [data, setData] = useState<WorkOrderModel[]>([]);

  const filterListProps = useInputIndexIterator({
    initialInputOptions: askUser,
  });

  useEffect(() => {
    if (filterListProps.isIterated) {
      setConfig(config);
      const filteredData = filterWorkOrders({ data: generatedData, config });
      setData(filteredData);
    }
  }, [filterListProps.isIterated]);

  return (
    <FlatList<WorkOrderModel>
      data={data}
      keyExtractor={i => i.id}
      renderItem={i => <WorkOrder key={i.item.id} {...i.item} />}
      ListHeaderComponent={<FilterList {...filterListProps} />}
    />
  );
};
