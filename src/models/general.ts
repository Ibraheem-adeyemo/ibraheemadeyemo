
export type defaultCallback<T> = (prev: T) => T



export type defaultCallbackInitiator<T> = (callback: defaultCallback<T> | T) => void

export interface State {
    id: string,
    name: string
}

export interface ComponentWithChildren {
    children: JSX.Element | JSX.Element[]
}

export interface Column {
    name: string,
    key: string,
    ele?:string,
    prefix?:string,
    suffix?:string,
    lookUp?:Record<string, any>
}

export interface Tab {
    name: string,
    isSelected: boolean
}


export interface apiUrlsv1Model {
    atmCount: string,
    atmCountDetails: string,
    atmInService: string,
    atmInServiceDetails:string,
    atmInSupervisor: string,
    atmInSupervisorDetails: string,
    atmOutOfService: string,
    atmOutOfServiceDetails: string,
    atmStats: string,
    audit: string,
    auditByUser:string,
    createTenantAdmin: string,
    getUserDetail: string,
    interChange: string,
    interchangeDisconnectionRequest:string,
    interchangeDisconnectionStatus:string,
    iswAdmin: string,
    passportUrl:string,
    states: string,
    tenant: string,
    tenantAdmin: string,
}

type performAction = <T extends Record<keyof T, T[keyof T]>>(x:T) => void

export interface Action {
    name: string,
    method: performAction,
    bgColor?: string,
    color?:string,
    showTextOnly?: boolean,
    ele?: string
}


export interface setFiltersToShowProps { 
    showTenantFilter?: boolean, 
    showTodayFilter?: boolean, 
    showThisWeekFilter?: boolean,
    showThisMonthFilter?: boolean,
    showThisYearFilter?: boolean,
    showCustomFilter?: boolean,
}