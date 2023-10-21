import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
    {
        id: 1,
        image: require('../assets/images/img2.jpg'),
        title: 'Lonely Path',
        subtitle: 'Web Design'
    },
    {
        id: 2,
        image: require('../assets/images/img3.jpg'),
        title: 'Photographer Girl',
        subtitle: 'Branding'
    },
    {
        id: 3,
        image: require('../assets/images/img4.jpg'),
        title: 'The Difference',
        subtitle: 'Web Design'
    },
    {
        id: 4,
        image: require('../assets/images/img5.jpg'),
        title: 'Nature Patterns',
        subtitle: 'Branding'
    },
    {
        id: 5,
        image: require('../assets/images/img6.jpg'),
        title: 'The Difference',
        subtitle: 'Photography'
    },
    {
        id: 6,
        image: require('../assets/images/img7.jpg'),
        title: 'Winter Sonata',
        subtitle: 'Web Design'
    },
    {
        id: 7,
        image: require('../assets/images/img8.jpg'),
        title: 'Lonely Path',
        subtitle: 'Branding'
    },
    {
        id: 8,
        image: require('../assets/images/img9.jpg'),
        title: 'Appreciation',
        subtitle: 'Photography'
    },
    {
        id: 9,
        image: require('../assets/images/img2.jpg'),
        title: 'Happy Days',
        subtitle: 'Web Design'
    }
]

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

function Work() {
    return (
        <section id='works' className='block works-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>OUR WORKS</h2>
                    <div className='subtitle'>
                        our awesome works
                    </div>
                </div>
                <Row className='portfoliolist'>
                    {worksData.map((v, i) => {
                        return (
                            <Col sm={4} key={v.id}>
                                <div className='portfolio-wrapper'>
                                    <a href="">
                                        <Image src={v.image} />
                                        <div className='label text-center'>
                                            <h3>{v.title}</h3>
                                            <p>{v.subtitle}</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Pagination>{items}</Pagination>
            </Container>
        </section>
    )
}

export default Work;