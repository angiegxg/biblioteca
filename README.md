https://acortar.link/N5YmW3

# Contexto
Un sello editorial de libros multinacional. Quierr ofrecer a su público una forma de ver su catálogo y poder guardar los libros que les interesan en una lista de lectura.
Usando el archivo books.json para obtener los datos de los libros, se desarrolla una aplicación teniendo en cuenta los requisitos de funcionalidad siguientes:

# Funcionalidad
Para este proyecto se han tenido en cuenta los siguientes requisitos:

**Visualización de Libros Disponibles:** La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

**Creación de Lista de Lectura:** El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

**Filtrado de Libros por Género:** Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

**Sincronización de Estado:** Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

**Persistencia de Datos:** La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

**Sincronización entre pestañas:** Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

# Uso 

Una vez que la aplicación esté en funcionamiento, podrás explorar la lista completa de libros disponibles, podras buscar filtrar los libros por genero y cantidad de paginas
![screenShot](https://github.com/angiegxg/biblioteca/blob/master/public/biblioteca1.png)

Puedes agregar libros a la lista de lectura dando clic en el boton +, del mismo modo podras elimanrlos de la lista de lectura.
![screenShot](https://github.com/angiegxg/biblioteca/blob/master/public/biblioteca2.png)

