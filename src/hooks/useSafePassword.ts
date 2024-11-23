import { useState } from "react";

export default () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [safeData, setSafeData] = useState({
    safe: "none",
    levels: ["gray", "gray", "gray"],
  });

  const checkPassword = (password: string) => {
    if (!password) {
      return { safe: "none", levels: ["gray", "gray", "gray"] };
    }

    if (password.length < 8) {
      return { safe: "weak", levels: ["red", "red", "red"] };
    }

    const hasLetters = /[a-zA-Zа-яА-ЯёЁїЇєЄіІґҐ]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[\p{P}\p{S}]/u.test(password);

    if (
      (hasLetters && !hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits && !hasSymbols) ||
      (!hasLetters && !hasDigits && hasSymbols)
    ) {
      return { safe: "weak", levels: ["red", "gray", "gray"] };
    }

    if (
      (hasLetters && !hasDigits && hasSymbols) ||
      (hasLetters && hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits && hasSymbols)
    ) {
      return { safe: "average", levels: ["yellow", "yellow", "gray"] };
    }
    if (hasLetters && hasDigits && hasSymbols) {
      return { safe: "strong", levels: ["green", "green", "green"] };
    }

    return { safe: "none", levels: ["gray", "gray", "gray"] };
  };

  const updatePassword = (newPassword: string) => {
    setPasswordValue(newPassword);
    const result = checkPassword(newPassword);
    setSafeData(result);
  };

  return { passwordValue, safeData, updatePassword };
};
