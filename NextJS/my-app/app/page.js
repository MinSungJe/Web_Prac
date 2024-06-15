import Link from "next/link";

export default function Home() {
  let name = 'park'
  return (
    <div>
      <h4 style={{color: 'red', fontSize: '30px'}}>애플 후레시</h4>
      <p className="title-sub">by dev { name }</p>
    </div>
  );
}
