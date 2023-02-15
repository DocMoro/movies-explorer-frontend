import './Href.scss';

export default function Href({classElement, text, href}) {
  console.log(classElement);
  console.log(text);
  return (
    <a className={`link ${classElement}`} href={href}>{text}</a>
  )
}