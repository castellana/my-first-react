const Section = () => {
    const user = "John Doe"
    const myStyle = {
      color: "gold",
      letterSpacing: "5px"
    }
    return ( 
        <section id="first-section">
            <h2>Hallo {user}</h2>
            <section id="hello" className="meine-Klasse" style={{color: "lime", fontSize: "30px"}}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam quod aliquid fuga dolorum sunt perferendis mollitia reiciendis quos dolor!
            </section>
            <article className="test">
                <p style={myStyle}>Lorem ipsum dolor sit amet.</p>
            </article>
        </section>
     );
}
 
export default Section;