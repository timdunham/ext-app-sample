import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Messages from './Messages/Messages';
import NavMenu from './NavMenu';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <Container>
            <Row>
                <Col className="col-8">
                    {props.children}
                </Col >
                <Col className="col-4">
                    <Messages />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
