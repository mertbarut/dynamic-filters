import { WorkOrder, WorkOrderColor, WorkOrderStatus, WorkOrderType } from './WorkOrder';

export enum FilterableWorkOrderAttribute {
  Status = 'status',
  Type = 'type',
  Color = 'color',
  StartDate = 'startDate',
  EndDate = 'endDate',
}

export type FilterableWorkOrderAttributes = Omit<WorkOrder, 'id' | 'name' | 'description'>;

type AskUser = { askUser?: boolean };

type Option<T, P extends keyof T> = { value?: T[P] };

type Value<T, P extends keyof T> = AskUser & Option<T, P>;

type OptionsFlags<Type> = {
  [Property in keyof Partial<Type>]: Value<Type, Property>;
};

export type FilterOptions = OptionsFlags<FilterableWorkOrderAttributes>;

export type FilterConfig = FilterOptions & {
  operator?: LogicalOperator;
  left?: FilterConfig;
  right?: FilterConfig;
};

type LogicalOperator = 'AND' | 'OR';

export type FilterOption = WorkOrderColor | WorkOrderStatus | WorkOrderType | Date;
