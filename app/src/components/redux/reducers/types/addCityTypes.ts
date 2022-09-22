
export interface AddCityState{
    cities: string[]
}

export enum AddCityActionEnum{
    ADD_CITY = 'ADD_CITY',
    DELETE_CITY = 'DELETE_CITY'
}

export interface AddCityAction{
    type: AddCityActionEnum.ADD_CITY
    payload: string
}
export interface DeleteCityAction{
    type: AddCityActionEnum.DELETE_CITY
    payload: number
}

export type CityAction = AddCityAction | DeleteCityAction