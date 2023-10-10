export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Ellen</p>
                    <h1 classname="hero--section--title">
                        <span className="hero--section-title--color">Front-End</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br /> Assumenda doloribus mollitia tempora ipsam adipisci!
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img3.png" alt="Hero Section" />
            </div>
        </section>
    )
}