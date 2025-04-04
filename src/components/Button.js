export default function Button({text, href}) {
    return (
        <a className="text-5xl font-bold mx-auto p-2" href={href}>{text}</a>
    );
  }