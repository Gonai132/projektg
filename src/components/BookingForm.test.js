import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders BookingForm labels", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const dateLabel = screen.getByText("Choose date");
  const timeLabel = screen.getByText("Choose time");
  const guestsLabel = screen.getByText("Number of guests");

  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
});