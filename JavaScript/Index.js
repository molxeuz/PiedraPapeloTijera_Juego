// INICIO

// verificacion de entrada
function VerificarIngreso() {

    if (document.getElementById ('desea').value == "S") {
            
        let mostrar_resultado = document.getElementById ('mostrar_resultado').value = ("Bienvenido al juego");

        let un_jugador = document.getElementById ('un_jugador').style.display = 'block';
        let dos_jugadores = document.getElementById ('dos_jugadores').style.display = 'block';

        document.getElementById ('nombre_modo_uno').style.display = 'none';
        document.getElementById ('nombre_modo_dos').style.display = 'none';
        document.getElementById ('reglas_modo_uno').style.display = 'none';
        document.getElementById ('reglas_modo_dos').style.display = 'none';

        document.getElementById ('registros_modo_dos').style.display = 'none';
        document.getElementById ('registros_modo_uno').style.display = 'none';

    } else {
        if (document.getElementById ('desea').value == 'N') {

            document.getElementById ('un_jugador').style.display = 'none';
            document.getElementById ('dos_jugadores').style.display = 'none';
            document.getElementById ('nombre_modo_uno').style.display = 'none';
            document.getElementById ('nombre_modo_dos').style.display = 'none';
            document.getElementById ('reglas_modo_uno').style.display = 'none';
            document.getElementById ('reglas_modo_dos').style.display = 'none';

            document.getElementById ('registros_modo_dos').style.display = 'none';
            document.getElementById ('registros_modo_uno').style.display = 'none';

            document.getElementById('mostrar_resultado').value = ("No ingresaste al juego...");

        } else {

            document.getElementById ('un_jugador').style.display = 'none';
            document.getElementById ('dos_jugadores').style.display = 'none';
            document.getElementById ('nombre_modo_uno').style.display = 'none';
            document.getElementById ('nombre_modo_dos').style.display = 'none';
            document.getElementById ('reglas_modo_uno').style.display = 'none';
            document.getElementById ('reglas_modo_dos').style.display = 'none';

            document.getElementById ('registros_modo_dos').style.display = 'none';
            document.getElementById ('registros_modo_uno').style.display = 'none';

            document.getElementById('mostrar_resultado').value = ("No te entiendo...");

        }

    }

}


// escojer modo uno
function modo_uno() {

    document.getElementById ('nombre_modo_uno').style.display = 'block';
    document.getElementById ('nombre_modo_dos').style.display = 'none';
    document.getElementById ('reglas_modo_uno').style.display = 'none';
    document.getElementById ('reglas_modo_dos').style.display = 'none';

    document.getElementById ('registros_modo_dos').style.display = 'none';
    document.getElementById ('registros_modo_uno').style.display = 'none';

    document.getElementById ('modo_uno').value = ("MODO SOLO JUGADOR");

    document.getElementById ('un_jugador').style.display = 'none';
    document.getElementById ('dos_jugadores').style.display = 'none';

    document.getElementById ('jugador_uno_uno').value;

}


// escojer modo dos
function modo_dos() {

    document.getElementById ('nombre_modo_dos').style.display = 'block';
    document.getElementById ('nombre_modo_uno').style.display = 'none';
    document.getElementById ('reglas_modo_dos').style.display = 'none';
    document.getElementById ('reglas_modo_uno').style.display = 'none';

    document.getElementById ('registros_modo_dos').style.display = 'none';
    document.getElementById ('registros_modo_uno').style.display = 'none';

    document.getElementById ('modo_dos').value = ("MODO DOS JUGADORES");

    document.getElementById ('un_jugador').style.display = 'none';
    document.getElementById ('dos_jugadores').style.display = 'none';

    document.getElementById ('jugador_uno_dos').value;
    document.getElementById ('jugador_dos_dos').value;

    let nombre_uno_dos = nombre_uno_modo_dos();
    let mostrar_nombre_uno_dos = document.getElementById ('nombre_jugador_uno_modo_dos');
    mostrar_nombre_uno_dos.value = nombre_uno_dos;

    let nombre_dos_dos = nombre_dos_modo_dos();
    let mostrar_nombre_dos_dos = document.getElementById ('nombre_jugador_dos_modo_dos');
    mostrar_nombre_dos_dos.value = nombre_dos_dos;

}


// nombre modo uno
function nombre_modo_uno() {

    let jugador_uno_uno;
    jugador_uno_uno = document.getElementById ('jugador_uno_uno').value;

    return jugador_uno_uno;

}

// nombre modo dos
function nombre_uno_modo_dos() {

    let jugador_uno_dos;
    jugador_uno_dos = document.getElementById ('jugador_uno_dos').value;

    return jugador_uno_dos;

}

function nombre_dos_modo_dos() {

    let jugador_dos_dos;
    jugador_dos_dos = document.getElementById ('jugador_dos_dos').value;

    return jugador_dos_dos;

}


// ingresar modo uno
function ingresar_modo_uno() {

    document.getElementById ('reglas_modo_uno').style.display = 'block';
    document.getElementById ('reglas_modo_dos').style.display = 'none';
    document.getElementById ('nombre_modo_uno').style.display = 'none';
    document.getElementById ('nombre_modo_dos').style.display = 'none';

    document.getElementById ('un_jugador').style.display = 'none';
    document.getElementById ('dos_jugadores').style.display = 'none';

    document.getElementById ('registros_modo_uno').style.display = 'block';
    document.getElementById ('registros_modo_dos').style.display = 'none';

    let nombre_uno_uno = nombre_modo_uno();
    let mostrar_nombre_uno_uno = document.getElementById ('mostrar_nombre_uno_uno');
    mostrar_nombre_uno_uno.value = nombre_uno_uno;

}

// ingresar modo dos
function ingresar_modo_dos() {

    document.getElementById ('reglas_modo_dos').style.display = 'block';
    document.getElementById ('reglas_modo_uno').style.display = 'none';
    document.getElementById ('nombre_modo_dos').style.display = 'none';
    document.getElementById ('nombre_modo_uno').style.display = 'none';

    document.getElementById ('un_jugador').style.display = 'none';
    document.getElementById ('dos_jugadores').style.display = 'none';

    document.getElementById ('registros_modo_dos').style.display = 'block';
    document.getElementById ('registros_modo_uno').style.display = 'none';

}

// numero del computador en el modo uno
function opcion_mostrar_computador() {

    let jugada_computador = " ";
    let numero = Math.floor(Math.random()*3)+1;

    if (numero == 1) {
        jugada_computador = "PIEDRA";

    } else {
        if (numero == 2) {
            jugada_computador = "PAPEL";

        } else {
            if (numero == 3) {
                jugada_computador = "TIJERA";

            }
        }
    }

    return jugada_computador;

}

// jugar modo uno
function jugar_modo_uno() {

    let opcion_jugador = document.getElementById('opcion_jugador_modo_uno').value;

    let opcion_computador = opcion_mostrar_computador();
    let mostrar_jugada_maquina = document.getElementById('opcion_computador_modo_uno');
    mostrar_jugada_maquina.value = opcion_computador;

    let nombre_uno_uno = nombre_modo_uno();
    let mostrar_nombre_uno_uno = document.getElementById ('mostrar_nombre_uno_uno');
    mostrar_nombre_uno_uno.value = nombre_uno_uno;

    let mostrar_ganador_con_modo_uno = document.getElementById ('gano_con_modo_uno');
    let ganador_con_modo_uno = "";

    let ganador_modo_uno = document.getElementById('opcion_ganador_modo_uno');
    let uno_ganador = "";

    if (opcion_computador == opcion_jugador) {
        uno_ganador = "EMPATE!!";
    }

    else {   
        if (opcion_computador == "PIEDRA" && opcion_jugador == "PAPEL") {
            uno_ganador = nombre_uno_uno;
            ganador_con = "PAPEL";

        } else {
            if (opcion_computador == "PIEDRA" && opcion_jugador == "TIJERA") {
                uno_ganador = "COMPUTADOR"
                ganador_con_modo_uno = "PIEDRA";

            } else {
                if (opcion_computador == "PAPEL" && opcion_jugador == "PIEDRA") {
                    uno_ganador = "COMPUTADOR"
                    ganador_con_modo_uno = "PAPEL";

                } else {
                    if (opcion_computador == "PAPEL" && opcion_jugador == "TIJERA") {
                        uno_ganador = nombre_uno_uno;
                        ganador_con_modo_uno = "TIJERA";

                    } else {
                        if (opcion_computador == "TIJERA" && opcion_jugador == "PAPEL") {
                            uno_ganador = "COMPUTADOR"
                            ganador_con_modo_uno = "TIJERA";

                        } else {
                            if (opcion_computador == "TIJERA" && opcion_jugador == "PIEDRA") {
                                uno_ganador = nombre_uno_uno;
                                ganador_con_modo_uno = "PIEDRA";

                            }
                        }
                    }
                }
            }
        }

    }

    ganador_modo_uno.value = uno_ganador;
    mostrar_ganador_con_modo_uno.value = ganador_con_modo_uno;

}

// jugar modo dos
function jugar_modo_dos() {

    let opcion_jugador_uno = document.getElementById('opcion_jugador_uno_modo_dos').value;

    let opcion_jugador_dos = document.getElementById('opcion_jugador_dos_modo_dos').value;

    let nombre_uno_dos = nombre_uno_modo_dos();
    let mostrar_nombre_uno_dos = document.getElementById ('nombre_jugador_uno_modo_dos');
    mostrar_nombre_uno_dos.value = nombre_uno_dos;

    let nombre_dos_dos = nombre_dos_modo_dos();
    let mostrar_nombre_dos_dos = document.getElementById ('nombre_jugador_dos_modo_dos');
    mostrar_nombre_dos_dos.value = nombre_dos_dos;

    let mostrar_ganador_con_modo_dos = document.getElementById ('gano_con_modo_dos');
    let ganador_con_modo_dos = "";

    let ganador_modo_dos = document.getElementById('opcion_ganador_modo_dos');
    let dos_ganador = "";

    if (opcion_jugador_uno == opcion_jugador_dos) {
        dos_ganador = "EMPATE!!";
    }

    else {   
        if (opcion_jugador_uno == "PIEDRA" && opcion_jugador_dos == "PAPEL") {
            dos_ganador = nombre_dos_dos;
            ganador_con_modo_dos = "PAPEL";

        } else {
            if (opcion_jugador_uno == "PIEDRA" && opcion_jugador_dos == "TIJERA") {
                dos_ganador = nombre_uno_dos;
                ganador_con_modo_dos = "PIEDRA";

            } else {
                if (opcion_jugador_uno == "PAPEL" && opcion_jugador_dos == "PIEDRA") {
                    dos_ganador = nombre_uno_dos;
                    ganador_con_modo_dos = "PAPEL";

                } else {
                    if (opcion_jugador_uno == "PAPEL" && opcion_jugador_dos == "TIJERA") {
                        dos_ganador = nombre_dos_dos;
                        ganador_con_modo_dos = "TIJERA";

                    } else {
                        if (opcion_jugador_uno == "TIJERA" && opcion_jugador_dos == "PAPEL") {
                            dos_ganador = nombre_uno_dos;
                            ganador_con_modo_dos = "TIJERA";

                        } else {
                            if (opcion_jugador_uno == "TIJERA" && opcion_jugador_dos == "PIEDRA") {
                                dos_ganador = nombre_dos_dos;
                                ganador_con_modo_dos = "PIEDRA";

                            }
                        }
                    }
                }
            }
        }

    }

    ganador_modo_dos.value = dos_ganador;
    mostrar_ganador_con_modo_dos.value = ganador_con_modo_dos;

}
