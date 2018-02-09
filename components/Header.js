import Link from 'next/link'

export default () => (
  <div id='nav'>
    <Link href='/'><a id='header-link'>CardsOnline</a></Link>
    <nav className='main-nav'>
      <ul>
        <li><Link href='/about'><a>About</a></Link></li>
        <li><Link href='/'><a>Home</a></Link></li>
      </ul>
    </nav>
    <div className='clear' />
  </div>
)
