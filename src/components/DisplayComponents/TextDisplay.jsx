import React, { useState } from "react";
import { Badge } from "react-bootstrap";
// import cancel icon from react-bootstrap-icons
import { XCircle } from "react-bootstrap-icons";

function KeyValue(props) {
    const { keyName, value, width, valueList, valueListCancel } = props;
    return (
        <div className="d-flex align-items-center justify-content-between text-wrap mb-2">
            <p className={`w-${width} h6 my-auto`}>{keyName}: </p>
            <p className={` my-auto text-break text-end`}>{value}</p>
            {valueList && (
                <p className={` my-auto text-break text-end`}>
                    {valueList.map((item, index) => (
                        <>
                            <Badge
                                pill
                                key={index}
                                bg={"primary"}
                                className={"ms-1 my-1"}
                            >
                                {item.file_name}
                                {valueListCancel && (
                                    <span
                                        className="ms-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            valueListCancel(item);
                                        }}
                                    >
                                        <XCircle color="white" />
                                    </span>
                                )}
                            </Badge>
                        </>
                    ))}
                </p>
            )}
        </div>
    );
}

function TypeList(props) {
    const { keyName, list, width } = props;
    const [colors, setColors] = useState([
        "primary",
        "success",
        "danger",
        "warning",
        "info",
    ]);
    return (
        <div
            className={
                "d-flex align-items-center justify-content-between text-wrap"
            }
        >
            <p className={`w-${width} h6 my-auto`}>{keyName}: </p>
            <p className={`my-auto text-break text-end`}>
                {list.map((item, index) => (
                    <Badge
                        pill
                        key={index}
                        bg={colors[index % 5]}
                        className={"ms-1 my-1"}
                    >
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
