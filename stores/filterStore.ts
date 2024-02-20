import { action, makeObservable, observable } from 'mobx';
import { FilterOptions, FilterConfig } from '@/models';

export class FilterStore {
  config: FilterConfig = {};
  options: FilterOptions = {};
  askUser: Array<keyof FilterOptions> = [];

  constructor(filterConfig: FilterConfig) {
    makeObservable(this, {
      config: observable,
      options: observable,
      askUser: observable,
      getOptions: action.bound,
      getConfig: action.bound,
      setConfig: action.bound,
      getFiltersAsSet: action.bound,
      setType: action.bound,
      setStatus: action.bound,
      setColor: action.bound,
      setEndDate: action.bound,
      setStartDate: action.bound,
      parseFilterConfig: action.bound,
      appendAskUser: action.bound,
    });
    this.parseFilterConfig(filterConfig);
    this.config = filterConfig;
  }

  parseFilterConfig(filterConfig: FilterConfig) {
    if (filterConfig.left) {
      this.parseFilterConfig(filterConfig.left);
    }
    if (filterConfig.status) {
      this.setStatus(filterConfig.status);
      if (filterConfig.status.askUser) {
        this.appendAskUser('status');
      }
    }
    if (filterConfig.type) {
      this.setType(filterConfig.type);
      if (filterConfig.type.askUser) {
        this.appendAskUser('type');
      }
    }
    if (filterConfig.color) {
      this.setColor(filterConfig.color);
      if (filterConfig.color.askUser) {
        this.appendAskUser('color');
      }
    }
    if (filterConfig.startDate) {
      this.setStartDate(filterConfig.startDate);
      if (filterConfig.startDate.askUser) {
        this.appendAskUser('startDate');
      }
    }
    if (filterConfig.endDate) {
      this.setEndDate(filterConfig.endDate);
      if (filterConfig.endDate.askUser) {
        this.appendAskUser('endDate');
      }
    }
    if (filterConfig.right) {
      this.parseFilterConfig(filterConfig.right);
    }
  }

  getOptions() {
    return this.options;
  }

  getFiltersAsSet() {
    return Object.entries(this.options);
  }

  getConfig() {
    return this.config;
  }

  appendAskUser(filter: keyof FilterOptions) {
    this.askUser.push(filter);
  }

  setConfig(config: FilterConfig) {
    if (this.options.status && config.status?.askUser) {
      config.status = this.options.status;
    }
    if (this.options.type && config.type?.askUser) {
      config.type = this.options.type;
    }
    if (this.options.color && config.color?.askUser) {
      config.color = this.options.color;
    }
    if (this.options.startDate && config.startDate?.askUser) {
      config.startDate = this.options.startDate;
    }
    if (this.options.endDate && config.endDate?.askUser) {
      config.endDate = this.options.endDate;
    }
    if (config.left) {
      this.setConfig(config.left);
    }
    if (config.right) {
      this.setConfig(config.right);
    }
    this.config = config;
  }

  setStatus(item: FilterOptions['status']) {
    this.options.status = item;
  }

  setType(item: FilterOptions['type']) {
    this.options.type = item;
  }

  setColor(item: FilterOptions['color']) {
    this.options.color = item;
  }

  setStartDate(item: FilterOptions['startDate']) {
    this.options.startDate = item;
  }

  setEndDate(item: FilterOptions['endDate']) {
    this.options.endDate = item;
  }
}
