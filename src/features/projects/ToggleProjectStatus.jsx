import { Field, Label, Switch } from "@headlessui/react";
import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";

function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      },
      {
        onSuccess: () => {
          setEnabled((prev) => !prev);
        },
      }
    );
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Field>
          <div className="flex items-center gap-x-2">
            <Label>{project.status === "OPEN" ? "باز" : "بسته"}</Label>
            <Switch
              checked={enabled}
              //   onChange={setEnabled}
              onChange={toggleHandler}
              className={`${
                enabled ? "bg-primary-900" : "bg-secondary-300"
              } group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition `}
            >
              <span className="size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6" />
            </Switch>
          </div>
        </Field>
      )}
    </div>
  );
}
export default ToggleProjectStatus;
