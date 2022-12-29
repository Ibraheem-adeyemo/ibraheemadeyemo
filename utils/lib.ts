import { contactResources, getFormEndpoint } from "../constant/urlsResources";
import { FormDataType } from "../models/form.model";

export const submitform = (userData:FormDataType) => {
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value])=>{
        formData.append(key, value)
    })
    return fetch(getFormEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formData
    })
}

export function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateContent = (formFeild:string) => {
    return formFeild.trim().length > 3 
}