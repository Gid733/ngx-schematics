import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {<%= classify(name) %>Model} from '../../models';

@Component({
    selector: '<%=dasherize(model.prefix)%>-<%=dasherize(name)%>-table',
    templateUrl: './<%=dasherize(name)%>-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>TableComponent {
    @Input()  <%= camelize(name) %>s: <%= classify(name) %>Model[];
    @Output() edit<%= classify(name) %>: EventEmitter<number> = new EventEmitter();
    @Output() delete<%= classify(name) %>: EventEmitter<number> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
    }

    editEntity(id: number) {
        this.edit<%= classify(name) %>.emit(id);
    }

    deleteEntity(id: number) {
        this.delete<%= classify(name) %>.emit(id);
    }

}
