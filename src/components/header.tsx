import "../styles/infoBar.css";

export function Header() {
  return (
    <div className="InfoBar">
      <a href="/creatForm">creatForm</a>
      <a href="/Cards">Content</a>
      <a className="Error" href="*">
        {" "}
        404 page
      </a>
      <a href="/about">About us</a>
    </div>
  );
}
