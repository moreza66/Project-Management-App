import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa"

export default function clientInfo({ client }) {
    return (
        <>
            <h5 className="mt-5">Client Information</h5>
            <li className="list-group-item">
                <FaIdBadge className="icon" /> {client.name}
            </li>
            <li className="list-group-item">
                <FaEnvelope className="icon" /> {client.email}
            </li>
            <li className="list-group-item">
                <FaPhone className="icon" /> {client.phone}
            </li>
        </>
    )
}
