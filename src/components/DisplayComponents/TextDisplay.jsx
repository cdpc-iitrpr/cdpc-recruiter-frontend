import React, { useState } from "react";
import { Badge } from "react-bootstrap";

function KeyValue(props) {
    const { keyName, value, width } = props;
    return (
        <div className="d-flex align-items-center justify-content-between text-wrap mb-2">
            <p className={`w-${width} h6 my-auto`}>{keyName}: </p>
            <p className={` my-auto text-break text-end`}>{value}</p>
        </div>
    );
}

function TypeList(props) {
    const { keyName, list, width } = props;
    const [colors, setColors] = useState(['primary', 'success', 'danger', 'warning', 'info'])
    return (
        <div className={"d-flex align-items-center justify-content-between text-wrap"}>
            <p className={`w-${width} h6 my-auto`}>{keyName}: </p>
            <p className={`my-auto text-break text-end`}>
                {list.map((item, index) => (
                    <Badge pill key={index} bg={colors[index%5]} className={"m-1"}>
                        {item}
                    </Badge>
                ))}
            </p>
        </div>
    );
}

KeyValue.defaultProps = {
    width: 50,
};

TypeList.defaultProps = {
    width: 50,
};

export { KeyValue, TypeList };
