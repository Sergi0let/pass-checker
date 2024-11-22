const useCharTypes = (password: string) => {
  const charTypes = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    special: false,
  };

  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    if (char.match(/[A-Z]/)) {
      charTypes.uppercase = true;
    } else if (char.match(/[a-z]/)) {
      charTypes.lowercase = true;
    } else if (char.match(/[0-9]/)) {
      charTypes.numbers = true;
    } else {
      charTypes.special = true;
    }
  }

  return {
    charTypes: Object.entries(charTypes)
      .filter(([key, value]) => key && value)
      .map((item) => item[0]),
  };
};

export default useCharTypes;
