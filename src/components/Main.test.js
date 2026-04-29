import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../api";

jest.mock("../api");

test("initializeTimes returns fetched times", () => {
  fetchAPI.mockReturnValue([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const result = initializeTimes();

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns fetched times based on date", () => {
  fetchAPI.mockReturnValue([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const state = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2026-04-30" };

  const result = updateTimes(state, action);

  expect(fetchAPI).toHaveBeenCalledWith("2026-04-30");
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});