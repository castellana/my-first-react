import Card from './Card'  //ahora queremos importar el componente Card que hemos creado. Para ello, escribimos aquí el Pfad con ./

const Section2 = () => {
    const francis = "Dies ist ein H1"  // tenemos que definir la variable que queremos usar en el return
    return ( 
        <section id="second">
            <h1>{francis}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, excepturi.</p>
            <div className="flex">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
     );
}
 
export default Section2;