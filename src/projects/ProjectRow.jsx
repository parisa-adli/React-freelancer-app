import { useState } from "react";
import Modal from "../ui/Modal";
import Table from "../ui/Table";
import toLocalDateShort from "../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../utils/toPersinNumber";
import truncateText from "../utils/truncateText";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { PiTrashBold } from "react-icons/pi";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex gap-x-4">
          <button onClick={() => setIsEditOpen(true)}>
            <PiPencilSimpleLineBold className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            title="modal title"
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
          >
            this is modal...
          </Modal>
          <button>
            <PiTrashBold className="w-5 h-5 text-error" />
          </button>
        </div>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
