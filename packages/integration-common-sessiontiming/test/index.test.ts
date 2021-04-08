import { SessionTiming } from '../src/index';

const sessionTiming: SessionTiming = new SessionTiming();

describe('SessionTiming', () => {
  it('should work as expected', () => {
    const event = sessionTiming.process({
      extra: {
        some: 'value',
      },
    });

    expect(typeof event.extra!['session:start']).toBeIn('number');
    expect(typeof event.extra!['session:duration']).toBe('number');
    expect(typeof event.extra!['session:end']).toBe('number');
    expect(event.extra!.some).toEqual('value');
  });
});
