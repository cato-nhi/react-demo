import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section>
      <p>Demo contents, in order...</p>
      <ol>
        <li>
          <a href="file:///C:/code/react-demo/public/javascript.html">
            Javascript
          </a>
        </li>
        <li>
          <a href="file:///C:/code/react-demo/public/jquery.html">JQuery</a>
        </li>
        <li>
          <Link to="no-jsx">No JSX</Link>
        </li>
        <li>
          <Link to="state">State</Link>
        </li>
        <li>
          <Link to="re-render">Re-render</Link>
        </li>
      </ol>
    </section>
  )
}
