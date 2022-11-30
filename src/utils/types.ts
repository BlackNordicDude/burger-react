import { ReactNode } from "react"
import { Location } from 'history'

export type TUser = {
    name? : string,
    email? : string,
    password?: string
}

export type TValue = TUser &  { 
    token?: string,
}

export type TIngredient = {
    image: string,
    price: number,
    name: string,
    __v: number,
    _id: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    image_mobile: string,
    image_large: string,
    uid?: string
}

export interface IPropsInnerItem  {
    index: number,
    moveItem: (dragIndex: number, hoverIndex: number) => void,
    children: ReactNode,
    className: string,
}

export type PropsIngredList = {
    categoryData: Array<TIngredient>,
    title: string,
    id: string,
    refer: React.LegacyRef<HTMLDivElement>
}

export type PropsIngredItem = {
    ingredientData: TIngredient
}

export type TModal = {
    onClose: () => void,
    title?: string,
    children: ReactNode
}

export type TLocationState = {
    from: string
}

export type TLocation = {
    background: Location,
  };