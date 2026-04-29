import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { fireEvent } from "@testing-library/react";

test("Renders BookingForm labels", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const dateLabel = screen.getByText("Choose date");
  const timeLabel = screen.getByText("Choose time");
  const guestsLabel = screen.getByText("Number of guests");

  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
});

test("HTML5 validation attributes are applied", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");

  expect(dateInput).toHaveAttribute("required");
  expect(timeSelect).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("submit button is disabled when form is invalid", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const button = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  expect(button).toBeDisabled();
});

test("submit button is enabled when form is valid", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);

  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(dateInput, { target: { value: "2026-05-01" } });
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  fireEvent.change(guestsInput, { target: { value: 2 } });

  const button = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  expect(button).not.toBeDisabled();
});