import {ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {<%= classify(name) %>Model} from '../../models';

@Component({
    selector: '<%=dasherize(model.prefix)%>-<%=dasherize(name)%>-create',
    templateUrl: './<%=dasherize(name)%>-create.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>CreateComponent implements OnInit {
    @Output() create<%= classify(name) %>: EventEmitter<<%= classify(name) %>Model> = new EventEmitter();
    <%= camelize(name) %>Form: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.<%= camelize(name) %>Form = this.formBuilder.group({
            <% for (let field of model.fields) { %><%=field.name%>: <%=field.default%>,
            <% } %>
        });
    }

    onSubmit() {
        if (this.<%= camelize(name) %>Form.invalid) {
            this.submitted = true;
            return;
        }
        this.create<%= classify(name) %>.emit(this.<%= camelize(name) %>Form.value);
    }

    get f() { return this.<%= camelize(name) %>Form.controls; }

}
