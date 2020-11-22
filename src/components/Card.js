const Card = () => {
    return (  
        <figure>
            <img src="/logo192.png" alt=""/> {/*Aquí en jmx tenemos que cerrar tag!! /> */}
            <img src="/assets/img/400-200x300.jpg" alt=""/> {/* si queremos usar foto que hemos bajado de internet */}
            {/* Si queremos añadir "logo192" escribimos barra / (sin punto) para acceder al PUBLIC ORDNER*/}
            <figcaption>Hier ist ein Text</figcaption>
        </figure>
    );
}
 
export default Card;