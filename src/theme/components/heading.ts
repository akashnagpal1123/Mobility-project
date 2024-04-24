const baseStyle = {
  color: "gray.800",
  fontFamily: "Qanelas Soft",
};
const sizes = {
  s: {
    fontSize: "16px",
    fontWeight: 600,
  },
  md: {
    fontSize: "18px",
    fontWeight: 600,
  },
  xs: {
    fontSize: "14px",
    fontWeight: 600,
  },
  lg: {
    fontSize: '{"md":"24px","base":"24px","sm":"22px"}',
    fontWeight: 600,
  },
};
const defaultProps = {
  size: "md",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
