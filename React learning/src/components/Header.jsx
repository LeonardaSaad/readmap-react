import usePath from '../hooks/usePath';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isHome } = usePath();

  return (
    <div className='header'>
      <Link to="/">
        <button className='btn-neutral'>{"<"}</button>
      </Link>

      <div className='header__title'>
        <h1>Bom dia caralho</h1>
        {isHome ? <h2 className='header__subtitle'>page 1</h2> : <h2 className='header__subtitle'>page 2</h2>}
      </div>
      
      <Link to="/page2">
        <button className='btn-neutral' >{">"}</button>
      </Link>
    </div >
  )
}

export default Header