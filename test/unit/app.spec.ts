import {App} from '../../src/app';
import {TestHelper} from "../utils/helper";

describe('the app', () => {
  it('says hello', () => {

    let h = new TestHelper();

    h.Name = "Testing";

    expect(h.Name).toBe("Testing");
    expect(new App().message).toBe('Hello World!');
  });
});
