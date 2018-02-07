import Link from 'next/link'

export default () => (
  <nav class="main-nav">
    <ul>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/"><a>Home</a></Link></li>
    </ul>
  </nav>
)
