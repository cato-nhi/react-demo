import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section>
      <p>React is different than JQuery in the sense that it is a UI component management library as opposed to a utility library wrapping browser APIs.</p>
      <p>React works through the “virtual DOM”, whereas jQuery interacts with the DOM directly. The virtual DOM is a DOM implementation in memory that compares to the existing DOM elements and makes the necessary changes/updates. And that leads to much faster performance.</p>
      <p>JQuery can also create elements, but this is not its primary function and the framework is not as efficient with it compared to React.</p>
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
          A simple component (this page)
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
