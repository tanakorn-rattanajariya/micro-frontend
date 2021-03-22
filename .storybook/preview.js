import React from "react";
import "styles/index.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <Story />
      </>
    );
  },
];
