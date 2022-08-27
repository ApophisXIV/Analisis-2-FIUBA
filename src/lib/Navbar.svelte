<script>
    import ToggleTheme from "./ToggleTheme.svelte";
    window.onscroll = function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > window.innerHeight) {
            navbar.classList.remove("text-slate-200");
            navbar.classList.add("bg-base-200");
            navbar.querySelector(".menu").classList.add("bg-base-100");
        }
    };
</script>

<div class="navbar fixed z-10 bg-base-200 shadow-lg">
    <div class="navbar-start">
        <div class="dropdown">
            <p tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    /></svg
                >
            </p>
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content bg-base-100 mt-3 p-2 shadow rounded-box w-52"
            >
                <li><a href="#home" target="_self">Home</a></li>
                <li tabindex="0">
                    <p>
                        Contenidos
                        <svg
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            ><path
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            /></svg
                        >
                    </p>
                    <ul class="p-2 bg-base-100">
                        <li>
                            <a href="#c1" target="_self">1 - GEOMETRÍA DEL PLANO DEL ESPACIO</a>
                        </li>
                        <li><a href="#c2" target="_self">2 - FUNCIONES LIMITES CONTINUIDAD</a></li>
                        <li><a href="#c3" target="_self">3 - DIFERENCIABILIDAD. SUPERFICIES</a></li>
                        <li>
                            <a href="#c4" target="_self">4 - FUNCIONES COMPUESTAS E IMPLÍCITAS</a>
                        </li>
                        <li><a href="#c5" target="_self">5 - POLINOMIO DE TAVLOR. EXTREMOS</a></li>
                        <li><a href="#c6" target="_self">6 - ECUACIONES DIFERENCALES</a></li>
                        <li><a href="#c7" target="_self">7 - INTEGRALES CURVILÍNEAS</a></li>
                        <li><a href="#c8" target="_self">8 - INTEGRALES MULTIPLES</a></li>
                        <li>
                            <a href="#c9" target="_self">9 - INTEGRALES DE SUPERFICIE - FLUJO</a>
                        </li>
                        <li><a href="#c10" target="_self">10 - TEOREMAS INTEGRALES</a></li>
                        <li>
                            <a href="#c11" target="_self">11 - ECUACIONES DIFERENCIALES (II)</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#footer" target="_self">Contacto</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl invisible md:visible" href="#home" target="_self"
            >Análisis Matemático II</a
        >
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            <li><a href="#home" target="_self">Home</a></li>
            <li tabindex="0">
                <a href="#main">
                    Contenidos
                    <svg
                        class="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        ><path
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        /></svg
                    >
                </a>
                <ul class="p-2 bg-base-100">
                    <li><a href="#c1" target="_self">1 - GEOMETRÍA DEL PLANO DEL ESPACIO</a></li>
                    <li><a href="#c2" target="_self">2 - FUNCIONES LIMITES CONTINUIDAD</a></li>
                    <li><a href="#c3" target="_self">3 - DIFERENCIABILIDAD. SUPERFICIES</a></li>
                    <li><a href="#c4" target="_self">4 - FUNCIONES COMPUESTAS E IMPLÍCITAS</a></li>
                    <li><a href="#c5" target="_self">5 - POLINOMIO DE TAVLOR. EXTREMOS</a></li>
                    <li><a href="#c6" target="_self">6 - ECUACIONES DIFERENCALES</a></li>
                    <li><a href="#c7" target="_self">7 - INTEGRALES CURVILÍNEAS</a></li>
                    <li><a href="#c8" target="_self">8 - INTEGRALES MULTIPLES</a></li>
                    <li><a href="#c9" target="_self">9 - INTEGRALES DE SUPERFICIE - FLUJO</a></li>
                    <li><a href="#c10" target="_self">10 - TEOREMAS INTEGRALES</a></li>
                    <li><a href="#c11" target="_self">11 - ECUACIONES DIFERENCIALES (II)</a></li>
                </ul>
            </li>
            <li><a href="#footer" target="_self">Contacto</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <ToggleTheme />
        <a class="btn btn-ghost hidden md:flex" href=" https://analisis2.com/" target="_blank">
            Ir al sitio oficial
        </a>
    </div>
</div>
