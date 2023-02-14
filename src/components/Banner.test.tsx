import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  it("displays the sunrise and sunset times", () => {
    const sunrise = "5:00 AM";
    const sunset = "7:00 PM";
    render(<Banner sunrise={sunrise} sunset={sunset} />);

    expect(screen.getByText(sunrise)).toBeInTheDocument();
    expect(screen.getByText(sunset)).toBeInTheDocument();
  });
});
