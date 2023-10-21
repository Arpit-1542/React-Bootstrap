import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Slider() {

    var slider = [
        {
            id: 1,
            Image: require('../assets/images/img-hero1.jpg'),
            title: "First slide label",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!"
        },
        {
            id: 2,
            Image: require('../assets/images/img-hero2.jpg'),
            title: "Start Your Future Financial Plan",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!"
        },
        {
            id: 3,
            Image: require('../assets/images/img-hero3.jpg'),
            title: "Enjoy the Difference",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!"
        }
    ]

    return (
        <section className='hero-block'>
            <Carousel fade>
                {slider.map((v, i) => {
                    return (
                        <Carousel.Item>
                            <Image src={v.Image} />
                            <Carousel.Caption>
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                                <a className="btn btn-primary">Learn More <i className="fas fa-chevron-right"></i></a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default Slider;