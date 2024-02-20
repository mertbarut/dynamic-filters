import { WorkOrder, WorkOrderColor, WorkOrderStatus, WorkOrderType } from '@/models';
import { WorkOrderColors, WorkOrderStati, WorkOrderTypes } from '@/utils';
import Chance from 'chance';
import dayjs from 'dayjs';

export const generateWorkOrders = (count: number): WorkOrder[] => {
  const chance = new Chance();
  const oneHourAgo = dayjs(new Date()).subtract(1, 'hour').toDate();
  const oneMonthAgo = dayjs(new Date()).subtract(1, 'month').toDate();

  const workOrders: WorkOrder[] = chance.unique(() => {
    const startDate = chance.date({ max: oneHourAgo, min: oneMonthAgo }) as Date;
    const endDate = dayjs(startDate).add(1, 'hour').toDate();

    return {
      id: chance.guid(),
      name: chance.cf(),
      description: chance.paragraph(),
      status: chance.pickone(WorkOrderStati) as WorkOrderStatus,
      type: chance.pickone(WorkOrderTypes) as WorkOrderType,
      color: chance.pickone(WorkOrderColors) as WorkOrderColor,
      startDate,
      endDate,
    };
  }, count);

  return workOrders.sort((a, b) => b.startDate.getDate() - a.startDate.getDate());
};
