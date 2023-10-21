import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    const html = 95;
    const respo = 70;
    const photo = 85;
    return (
        <section className="about-block block" id='about'>
            <Container fluid>
                <div className="title-holder">
                    <h2>ABOUT US</h2>
                    {/* <h4 style={{ color: "gray" }}>- learn more about us -</h4> */}
                    <div className="subtitle">learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={require('../assets/images/img1.jpg')} />
                    </Col>
                    <Col sm={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
                        <div className='progress-block'>
                            <h4>HTML / CSS / Javascript</h4>
                            <ProgressBar now={html} animated label={`${html}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>RESPONSIVE</h4>
                            <ProgressBar now={respo} animated label={`${respo}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>PHOTOSHOP</h4>
                            <ProgressBar now={photo} animated label={`${photo}%`} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;