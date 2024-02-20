export type WorkOrderStatus = 'Open' | 'Closed' | 'In Progress';

export type WorkOrderType = 'Installation' | 'Maintenance' | 'Failure';

export type WorkOrderColor = 'blue' | 'purple' | 'black';

export type WorkOrder = {
  id: string;
  name: string;
  description: string;
  status: WorkOrderStatus;
  type: WorkOrderType;
  color: WorkOrderColor;
  startDate: Date;
  endDate: Date;
};
