import zxcvbn from "zxcvbn";

const usePasswordStrength = (password: string) => {
  const result = zxcvbn(password);

  const formatTime = (seconds: number): string => {
    if (seconds === 0) return "";
    const timeUnits = [
      { limit: 60, label: "seconds", divisor: 1 },
      { limit: 3600, label: "minutes", divisor: 60 },
      { limit: 86400, label: "hours", divisor: 3600 },
      { limit: 2592000, label: "days", divisor: 86400 },
      { limit: 31536000, label: "months", divisor: 2592000 },
      { limit: Infinity, label: "years", divisor: 31536000 },
    ];

    const unit = timeUnits.find(({ limit }) => seconds < limit) || timeUnits[0];
    const value = Math.floor(seconds / unit.divisor);
    return value === 0 ? "Start to type" : `${value} ${unit.label}`;
  };

  const crackTimeInSeconds = result.crack_times_seconds
    .online_no_throttling_10_per_second as number;

  return {
    crackTime: formatTime(crackTimeInSeconds),
  };
};

export default usePasswordStrength;
