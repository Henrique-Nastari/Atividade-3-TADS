import {Link} from "react-router-dom"
function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://www.ufrn.br" ><figure><img src="https://www.ufrn.br/resources/documentos/identidadevisual/logotipo/logotipo_negativo.png" height="70px" width="150px" alt=""/>
        </figure></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-0 mb-lg 0">0
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/home">Home</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to="/projetoped">Projeto Pedagógico</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to="/calendario">Calendario</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to="/curriculo">Curriculo</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </li>
        <li class="nav-item">
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Header;



