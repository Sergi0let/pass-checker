const British = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h512v512H0z" fill="#012169" />
      <path
        d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
        fill="#FFF"
      />
      <path
        d="M184 324l11 34L42 512H0v-3zm124-12l54 8 150 147v45zM512 0L320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
        fill="#C8102E"
      />
      <path d="M176 0v512h160V0zM0 176v160h512V176z" fill="#FFF" />
      <path d="M0 208v96h512v-96zM208 0v512h96V0z" fill="#C8102E" />
    </svg>
  );
};

export { British };
