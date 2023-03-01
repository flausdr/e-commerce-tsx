import { Request } from "./request";

export const useRequest = (entity: string, params: any, isSecure = true) => {
    return new Request(entity, isSecure, params);
}