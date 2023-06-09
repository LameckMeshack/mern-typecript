import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { Store } from "../Store";

export const useRedirectAuth = (): void => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";
    const { state: { userInfo } } = useContext(Store);

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);
};