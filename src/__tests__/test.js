
const delay = () => new Promise(resolve => setTimeout(resolve, 500));

describe('jest demo', () => {
  test('test', () => {
    expect(3).toBe(3);
  });

  test(' should equal default', async () => {
    expect.assertions(1);
    await delay();
    expect(3).toBe(3);
  });
});
