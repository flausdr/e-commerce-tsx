import config from './config.json';

interface ParamsType {
    customDomain: string;
    customPort: number;
    customApi: string;
    customApiVersion: string;
}

interface OptionsType {
    method: string;
    body?: string | Blob | FormData;
    headers?: any;
}

const { domain, port, api, apiVersion } = config;

export class Request {
    url = "";
    token = "";

    constructor(entity: string, isSecure = true, params: ParamsType) {
        const _protocol = isSecure ? "https" : "http";
        const _domain = params.customDomain || domain;
        const _port = params.customPort || port;
        const _api = params.customApi || api;
        const _apiVersion = params.customApiVersion || apiVersion;

        this.url = `${_protocol}://${_domain}:${_port}/${_api}/${_apiVersion}/${entity}`
    }

    setToken = (token: string) => {
        this.token = token;
    }

    requestToApi = async(
        method: string,
        path: string,
        data: string | Blob,
        isAuth: boolean,
        isFileUpload: boolean
    ) => {
        try {
            const options: OptionsType = { headers: {}, method };

            if (isAuth) options.headers.Authorization = `Bearer ${this.token}`;
            options.headers.Accept = "application/json";

            if (isFileUpload) {
                options.headers["Content-Type"] = "multipart/form-data";
                if (data) {
                    options.body = new FormData();
                    options.body.append("file", data);
                }
            } else {
                options.headers["Content-Type"] = "application/json";
                if (data) options.body = JSON.stringify(data);
            }

            const response = await fetch(this.url + path, options);

            return response.json()
        } catch (error: any) {
            console.log(error.message);
        };
    }
    
    get = async (path: string, isAuth: boolean) => {
        return this.requestToApi("GET", path, "", isAuth, false);
    };

    post = async (path: string, data: any, isAuth: boolean) => {
        return this.requestToApi("POST", path, data, isAuth, false);
    };

    put = async (path: string, data: any, isAuth: boolean) => {
        return this.requestToApi("PUT", path, data, isAuth, false);
    };

    delete = async (path: string, isAuth: boolean) => {
        return this.requestToApi("DELETE", path, "", isAuth, false);
    };

    file = async (path: string, file: string | Blob, isAuth: boolean) => {
        return this.requestToApi("POST", path, file, isAuth, true);
    };
}