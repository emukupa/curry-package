const name = require('./index');

describe('Name', () => {
  it('Peter Parker', () => {
    expect(name('Peter')('Parker')).toEqual('Peter Parker');
  });
  it('Peter', () => {
    expect(name('Peter')()).toEqual('Peter');
  });
  it('Parker', () => {
    expect(name()('Parker')).toEqual('Parker');
  });
});
