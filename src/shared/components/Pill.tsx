import { JSX } from "solid-js";

interface PillProps {
  text: string;
  color: string;
}

const Pill = ({ text, color }: PillProps) => {
  return (
    <span class={`bg-${color} bg-opacity-20 text-${color}`}>{text}</span>
  );
};

export default Pill;
