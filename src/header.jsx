function Header(props) {
  const Navdata = props.Navdata;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className= "container">
        <ul className= "navbar-nav">
          {Navdata.map((x) => (
          <li key={x.id} >
            <a className="nav-link" href={`#${x.id}`}>{x.title} </a>
          </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Header
