import { WorkOrderList } from '@/components/WorkOrder/WorkOrderList';
import { Box } from '@gluestack-ui/themed';

// eslint-disable-next-line
export default function WorkOrdersScreen() {
  return (
    <Box bgColor="white" flex={1}>
      <WorkOrderList />
    </Box>
  );
}
