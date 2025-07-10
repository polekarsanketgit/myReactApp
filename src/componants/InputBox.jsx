import Display from "./Display";

export default function InputBox({ text, setText }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Display text={text} />
    </div>
  );
}