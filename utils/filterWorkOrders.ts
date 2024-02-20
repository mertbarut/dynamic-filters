import { FilterConfig, WorkOrder } from '@/models';
import { generateExpressions } from './generateExpressions';

type FilterWorkOrdersProps = {
  data: WorkOrder[];
  config: FilterConfig;
};

export const filterWorkOrders = ({ config, data }: FilterWorkOrdersProps) => {
  return eval(`${JSON.stringify(data)}.filter((item) => ${generateExpressions(config, 'item')})`);
};
