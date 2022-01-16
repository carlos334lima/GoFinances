import React from "react";

import { render } from "@testing-library/react-native";

import { Profile } from "../../screens/Profile";

describe("Profile", () => {
  //Checking placeholder
  it("check if show correctly button placeholder", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");

    expect(inputName.props.placeholder).toBeTruthy();
  });

  //Checking value input
  it("load data user", () => {
    const { getByTestId } = render(<Profile />);

    expect(getByTestId("input-name").props.value).toEqual("lima");
  });

  //Checking content input
  it("Checking content input", () => {
    const { getByTestId } = render(<Profile />);

    expect(getByTestId("text-user").props.children).toContain("usuario");
  });
});
