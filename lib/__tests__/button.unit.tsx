import renderer from "react-test-renderer";
import Button from "../button";
import React from "react";
describe("button tests", () => {
  it("是个div", () => {
    const json = renderer.create(<Button></Button>).toJSON();
    expect(json).toMatchInlineSnapshot(`
      <div>
        按钮2
      </div>
    `);
  });
});
