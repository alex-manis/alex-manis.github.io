import "./Background.css";

export default function Background() {
  return (
    <div className="background">
      <div className="background__glow background__glow--primary"></div>
      <div className="background__glow background__glow--secondary"></div>
      <div className="background__glow background__glow--tertiary"></div>
    </div>
  );
}
