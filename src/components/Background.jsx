import '../styles/components/Background.css';

export default function Background(props) {
  const src = props.src;
  const text = props.text;

  return (
    <div className="background">
      <span>{text}</span>
      <img src={src} alt={text}></img>
    </div>
  );
}