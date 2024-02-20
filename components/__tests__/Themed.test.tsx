import { renderHook } from '@testing-library/react';

global.fetch = jest.fn();

describe('useThemeColor', () => {
  it('should ...', async () => {
    const { result } = renderHook(() => {});
    const test = result.current;

    expect(test).toBe('test');
  });
});
