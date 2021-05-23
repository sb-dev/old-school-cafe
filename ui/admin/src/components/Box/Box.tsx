import React from "react";
import {Col, Row} from "antd";

import "./Box.css";

function Box(props: any) {
    const { className, children } = props;
    return (
        <Row className={'inner-content'} justify="center" align="middle">
            <Col className={`box ${className}`} span={6}>
                <div className={'inner-box'}>
                    <div className="fclx-logo blue">&nbsp;</div>
                    {children}
                </div>
            </Col>
        </Row>
    )
}

export default Box;
