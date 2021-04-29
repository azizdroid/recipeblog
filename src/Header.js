import React from "react";
import { Row, Col } from "antd";

function Header() {
  return (
    <div>
      <Row>
        <Col
          lg={24}
          xs={24}
          style={{
            fontSize: "70px",
            fontFamily: "fantasy",
            fontStyle: "oblique",

            width: "100%",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVuY2h8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
            color: "black",
          }}
        >
          {" "}
          {/* <img
            src="https://images.unsplash.com/photo-1577003833154-a92bbd63ae13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            style={{ width: "100%", height: "50%" }}
          />{" "} */}
          Food Recipe Blog
        </Col>
      </Row>

      <Row>
        <Col span={12}> </Col>
      </Row>
    </div>
  );
}

export default Header;
