import { useMutation } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";

export default function useRemoveProject() {
    useMutation({
        mutationFn: removeProjectApi
        
    });
}