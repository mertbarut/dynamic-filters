import { FilterConfig } from '@/models';

export const filterConfigs: FilterConfig[] = [
  // 0. Status = ‘Open’
  {
    status: {
      value: 'Open',
      askUser: false,
    },
  },
  // 1. Status = ‘Open’ AND Color = ‘Blue’
  {
    operator: 'AND',
    status: {
      value: 'Open',
      askUser: false,
    },
    color: {
      value: 'blue',
      askUser: false,
    },
  },
  // 2. (Status = ‘Open’ AND AskUser(Type))
  {
    operator: 'AND',
    status: {
      value: 'Open',
      askUser: false,
    },
    type: {
      askUser: true,
    },
  },
  // 3. (AskUser(Status) OR (AskUser(Type) AND AskUser(StartDate))
  {
    operator: 'OR',
    status: {
      askUser: true,
    },
    right: {
      operator: 'AND',
      type: {
        askUser: true,
      },
      startDate: {
        askUser: true,
      },
    },
  },
  // 4. (AskUser(Status) AND AskUser(Color)) OR (AskUser(Type) AND AskUser(EndDate))
  {
    operator: 'OR',
    left: {
      operator: 'AND',
      status: {
        askUser: true,
      },
      color: {
        askUser: true,
      },
    },
    right: {
      operator: 'AND',
      type: {
        askUser: true,
      },
      endDate: {
        askUser: true,
      },
    },
  },
  // 5. (AskUser(Status) AND AskUser(Color) AND AskUser(Type)) OR (AskUser(StartDate) AND AskUser(EndDate))
  {
    operator: 'OR',
    left: {
      operator: 'AND',
      status: {
        askUser: true,
      },
      color: {
        askUser: true,
      },
      type: {
        askUser: true,
      },
    },
    right: {
      operator: 'AND',
      startDate: {
        askUser: true,
      },
      endDate: {
        askUser: true,
      },
    },
  },
  // 6. () - no filter
  {},
  // 7. (AskUser(Status) AND Color = 'purple' AND AskUser(Type)) OR (AskUser(StartDate) AND EndDate = NOW)
  {
    operator: 'OR',
    left: {
      operator: 'AND',
      status: {
        askUser: true,
      },
      color: {
        value: 'purple',
        askUser: false,
      },
      type: {
        askUser: true,
      },
    },
    right: {
      operator: 'AND',
      startDate: {
        askUser: true,
      },
      endDate: {
        value: new Date(),
        askUser: false,
      },
    },
  },
];
