import { Field, CrudModel } from "../crud-module/model";
import { SchematicsException } from "@angular-devkit/schematics/src/exception/exception";

export function getId(model: CrudModel): Field {
    let id = model.fields.find(f => f.isId);
    if (!id) throw new SchematicsException('No id found');
    return id;
}
