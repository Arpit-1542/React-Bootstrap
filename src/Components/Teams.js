import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

var teams = [
    {
        id: 1,
        img: require('../assets/images/team1.jpg'),
        name: "Gabriel Hart",
        post: "CEO",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        id: 2,
        img: require('../assets/images/team2.jpg'),
        name: "David Antony",
        post: "Manager",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        id: 3,
        img: require('../assets/images/team3.jpg'),
        name: "Nicholas Perry",
        post: "UX Designer",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        id: 4,
        img: require('../assets/images/team4.jpg'),
        name: "Sarah Wills",
        post: "Developer",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        id: 5,
        img: require('../assets/images/team5.jpg'),
        name: "Sophia Pitt",
        post: "Developer",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        id: 6,
        img: require('../assets/images/team6.jpg'),
        name: "Taylor Lopez",
        post: "Developer",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        id: 7,
        img: require('../assets/images/team7.jpg'),
        name: "Ryan Giggs",
        post: "Content Writer",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        id: 8,
        img: require('../assets/images/team8.jpg'),
        name: "David Smith",
        post: "SEO Expert",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
]

function Teams() {
    return (
        <section id="teams" className="block teams-block" >
            <Container fluid>
                <div className="title-holder">
                    <h2>OUR TEAMS</h2>
                    <div className="subtitle">
                        some of our experts
                    </div>
                </div>
                <Row>
                    {teams.map((v, i) => {
                        return (
                            <Col sm={3} key={v.id}>
                                <div className="image">
                                    <Image src={v.img} />
                                    <div className="overlay" >
                                        <div className="socials">
                                            <ul>
                                                <li><a href="#facebook"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#twitter"><i className="fab fa-twitter" /></a></li>
                                                <li><a href="#linkedin"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>{v.name}</h3>
                                    <span className="designation">{v.post}</span>
                                    <p>{v.discription}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section >
    )
}

export default Teams;