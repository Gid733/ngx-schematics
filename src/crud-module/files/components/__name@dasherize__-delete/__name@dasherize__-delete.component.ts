import {ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {<%= classify(name) %>Model} from '../../models';

@Component({
    selector: '<%=dasherize(model.prefix)%>-<%=dasherize(name)%>-delete',
    templateUrl: './<%=dasherize(name)%>-delete.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>DeleteComponent {
    @Input() selected<%= classify(name) %>Model: <%= classify(name) %>Model;
    @Output() delete<%= classify(name) %>: EventEmitter<number> = new EventEmitter();
    constructor() {
    }

    deleteEntity() {
        this.delete<%= classify(name) %>.emit(this.selected<%= classify(name) %>Model.id);
    }
}
