import React from "react";
import { Badge } from "react-bootstrap";

const WinsCount = ({ count = 0 }) => {
    return (
        <React.Fragment>
            <Badge pill variant="success">
                Wins: {count}
            </Badge>
        </React.Fragment>
    );
};

export default WinsCount;