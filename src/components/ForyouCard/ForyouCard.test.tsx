import React from "react";
import { create } from "react-test-renderer";
import ForyouCard from "./ForyouCard";

describe("initial", () => {
  test("render", () => {
    const tree = create(<ForyouCard />);

    const text = tree.root.findByProps({
      testID: "text-check",
    });
    expect(text.props.children).toBe("test-text");
  });
});
