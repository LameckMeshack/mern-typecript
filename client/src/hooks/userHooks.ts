import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { UserInfo } from "../types/UserInfo";

export const userSigninMutation = () =>
    useMutation({
        mutationFn: async ({ email, password }: { email: string, password: string }) => (
            await apiClient.post<UserInfo>(`api/users/signin`, { email, password })).data,
    });