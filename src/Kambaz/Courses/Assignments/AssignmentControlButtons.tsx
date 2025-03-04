import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentDelete from "./AssignmentDeleter";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";


export default function AssignmentControlButtons({ deleteAssignment }: { deleteAssignment: () => void }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);

    return (
        <div className="d-flex float-end pt-2">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <div onClick={handleShow}>
                <FaTrash className="fs-4" />
            </div>
            <AssignmentDelete show={show} dialogTitle="Delete Assignment" handleClose={handleClose} deleteAssignment={deleteAssignment} />
        </div>
    );
}
