import { FormControl } from "react-bootstrap"
import { useState } from "react"

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function RequestPathParameters() {
    const [a, setA] = useState(13);
    const [b, setB] = useState(26);
    return (
        <div id="wd-request-parameters" >
            <h3>Request Path Parameters</h3>
            <FormControl id="wd-request-parameter-a"
                className="mb-2"
                defaultValue={a} type="number"
                onChange={(e) => setA(parseInt(e.target.value))} />
            <FormControl id="wd-request-parameter-b"
                className="mb-2"
                defaultValue={b} type="number"
                onChange={(e) => setB(parseInt(e.target.value))} />
            <a id="wd-request-parameter-add"
                href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
                Add {a} + {b}
            </a> <br />
            <a id="wd-request-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Subtract {a} - {b}
            </a><br />
            <a id="wd-request-parameter-multiply"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
                Multiply {a} * {b}
            </a><br />
            <a id="wd-request-parameter-divide"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
                Divide {a} / {b}
            </a>
            <hr />
        </div >
    )
};
