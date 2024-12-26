import { useState } from "react";

import Modal from "../../../ui/Modal";
import { TbChecklist } from "react-icons/tb";
import Table from "../../../ui/Table";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتطار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}
        >
          {/* <ChangeProposalStatus
          proposalId={proposal._id}
          proposalStatus={proposal.status}
          onClose={() => setOpen(false)}
        /> */}
        </Modal>
        <button onClick={() => setOpen(true)}>
          <TbChecklist className="w-6 h-6 text-primary-800" />
        </button>
      </td>
    </Table.Row>
  );
}
export default UserRow;