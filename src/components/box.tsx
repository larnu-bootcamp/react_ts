
type BoxProps = {
  count: number;
  onClick: () => void;
  title?: string;
}

export const Box = ({ count, onClick }: BoxProps) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>CLick me!</button>
    </div>
  );
}