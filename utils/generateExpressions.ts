import { FilterConfig } from '@/models';

export const generateExpressions = (config: FilterConfig, item: 'item') => {
  const expressions: string[] = [];

  if (config.left) {
    const leftExpression = `(${generateExpressions(config.left, item)})`;
    expressions.push(leftExpression);
  }
  if (config.right) {
    const rightExpression = `(${generateExpressions(config.right, item)})`;
    expressions.push(rightExpression);
  }

  if (config.status?.value) {
    expressions.push(`${item}.status === '${config.status.value}'`);
  }
  if (config.type?.value) {
    expressions.push(`${item}.type === '${config.type.value}'`);
  }
  if (config.color?.value) {
    expressions.push(`${item}.color === '${config.color.value}'`);
  }
  if (config.startDate?.value) {
    expressions.push(`Date.parse(${item}.startDate) > Date.parse('${config.startDate.value}')`);
  }
  if (config.endDate?.value) {
    expressions.push(`Date.parse(${item}.endDate) < Date.parse('${config.endDate.value}')`);
  }

  if (expressions.length === 0) {
    return 'true';
  }
  return `(${expressions.join(` ${config.operator === 'OR' ? '||' : '&&'} `)})`;
};
