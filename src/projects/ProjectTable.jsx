import Loading from "../ui/Loading";
import Empty from "../ui/Empty";

import useOwnerProjects from "./useOwnerProjects";
import truncateText from "../utils/truncateText";
import toLocalDateShort from "../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../utils/toPersinNumber";
import Table from "../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <tr className="title-row">
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </tr>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProjectTable;
