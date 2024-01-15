let navbar = document.getElementById("navbar");
navbar.insertAdjacentHTML("beforeend",
        `<nav class="navbar navbar-expand-lg " style="color: blanchedalmond;">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img src="./src/img/Future Team México.png" alt="" width="150px" height="120px"
                    style="margin-left: 30px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./formproyectos.html" style="margin-right: 50px;">Proyectos, líderes e
                            iniciativas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./formredes.html" style="margin-right: 50px;">Programa voluntariado</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.facebook.com/FMJMEXICO2024" style="margin-right: 50px;"><img
                                src="./src/img/facebook.png" alt="" width="40px" height="40px"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.instagram.com/fmjmexico2024/" style="margin-right: 50px;"><img
                                src="./src/img/instagram.png" alt="" width="40px" height="40px"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.tiktok.com/@fmjmexico2024" style="margin-right: 50px;"><img
                                src="./src/img/tik-tok.png" alt="" width="40px" height="40px"></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav><br>`);