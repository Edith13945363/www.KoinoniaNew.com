<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Inscripción</title>
    <link rel="stylesheet" href="style.css"> <!-- Vinculamos el archivo CSS -->
</head>
<body>
    <header>
        <h1>Bienvenido a nuestro sitio web</h1>
        <p>¡Inscríbete para recibir noticias y actualizaciones!</p>
    </header>

    <section class="form-container">
        <h2>Formulario de Inscripción</h2>
        <form id="form-inscripcion" onsubmit="procesarFormulario(event)">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Inscribirme</button>
        </form>

        <div id="mensaje" style="display: none;">
            <h2>¡Inscripción exitosa!</h2>
        </div>
    </section>

    <script src="script.js"></script> <!-- Vinculamos el archivo JS -->
</body>
</html>