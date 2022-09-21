import React from "react";
import { useTranslation } from "react-i18next";
import { create } from "react-test-renderer";
import ForyouCard, { Props } from "./ForyouCard";

const defaultProps: Props = {
  content: "some-string",
};

describe("Cemponent", () => {
  test("initial render", () => {
    const tree = create(<ForyouCard {...defaultProps} />);

    const text = tree.root.findByProps({
      testID: "foryoucard-text",
    });
    expect(text.props.children).toBe("some-string");
  });
});
