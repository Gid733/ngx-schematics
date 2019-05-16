export interface CrudModel {
    title: string;
    entity: string;
    prefix: string;
    filter: string[];
    fields: Field[];
}

export interface Field {
    name: string;
    isId: boolean;
    readonly: boolean;
    type: TypeOptions;
    label: string;
    default: any;
    validation: string;
}

export type TypeOptions = 'text' | 'number' | 'Date';
export type ShowOptions = 'filter' | 'list' | 'insert' | 'update';
export type ControlOptions = 'text';
