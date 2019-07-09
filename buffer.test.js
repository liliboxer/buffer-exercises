describe('buffer', () => {
  it('creates buffer length of 10', () => {
    const buf = Buffer.alloc(10);
    expect(buf).toHaveLength(10);
  });
  it('create buffer from string', () => {
    const buf = Buffer.from('hi there');
    expect(buf.toString()).toEqual('hi there');
    expect(buf[0]).toEqual(104);
    const hBuf = buf.map(b => 104);
    expect(hBuf.toString()).toEqual('hhhhhhhh');
  });
  it('create hex codes', () => {
    const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
    console.log(smile.toString());
    expect(smile.toString()).toEqual('😁');
  })
});

const lilisStory = Buffer.from([0xF0, 0x9F, 0x98, 0xBA, 0x20, 0xE2, 0x9C, 0x8A, 0x20, 0xF0, 0x9F, 0x92, 0xBB]).toString();
  console.log(lilisStory);