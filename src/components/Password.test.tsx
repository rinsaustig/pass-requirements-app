import { describe, expect, it } from "vitest";

describe("Password", () => {
  function PasswordRequiriments(password: string) {
    const passwordReqs = [
      { label: "Has a number 0-9", isSatisfied: false },
      {
        label: "Has a special char !@#$%^&*",
        isSatisfied: false,
      },
      { label: "Has uppercase Letter", isSatisfied: false },
      { label: "Has NO consecutive letters", isSatisfied: false },
      // Add more requirements as needed
    ];
    const updatedReqs = [...passwordReqs];
    updatedReqs[0].isSatisfied = /\d/.test(password);
    updatedReqs[1].isSatisfied = /[!@#$%^&*]/.test(password);
    updatedReqs[2].isSatisfied = /[A-Z]/.test(password);
    updatedReqs[3].isSatisfied = !/(.)\1/.test(password) && password.length > 1;

    const fullfilled = (request: { isSatisfied: boolean }) =>
      request.isSatisfied;

    const allReqsAchieved = updatedReqs.every(fullfilled);

    return allReqsAchieved;
  }
  it("Should be unsatisfied if it doesn't have a number", () => {
    expect(PasswordRequiriments("pasT@")).toBe(false);
  });
  it("Should be unsatisfied if it doesn't have a special character", () => {
    expect(PasswordRequiriments("pasT3")).toBe(false);
  });
  it("Should be unsatisfied if it doesn't have an uppercase letter", () => {
    expect(PasswordRequiriments("pas@3")).toBe(false);
  });

  it("Should be unsatisfied if it has consecutive letters", () => {
    expect(PasswordRequiriments("Pass@3")).toBe(false);
  });

  it("Should be satisfied when all requirements are achieved", () => {
    expect(PasswordRequiriments("PasT@3")).toBe(true);
  });
});
