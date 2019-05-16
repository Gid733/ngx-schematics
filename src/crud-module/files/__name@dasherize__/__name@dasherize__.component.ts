import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {
    <%= classify(name) %>Models,
    <%= classify(name) %>Model,
    <%= classify(name) %>RequestModel,
    <%= classify(name) %>CreateModel,
    <%= classify(name) %>UpdateModel,
} from '../models';

import {
    <%= classify(name) %>Service
} from '../services/<%= dasherize(name) %>.service';

@Component({
    selector: '<%=dasherize(model.prefix)%>-<%=dasherize(name)%>',
    templateUrl: './<%=dasherize(name)%>.component.html',
})
export class <%= classify(name) %>Component implements OnInit {
    requestModel: <%= classify(name) %>RequestModel = {
        pageNumber: 1,
        pageSize: 10,
        offset: 0,
    };
    <%= camelize(name) %>Models: <%= classify(name) %>Models;
    createSub$: Subscription;
    deleteSub$: Subscription;
    updateSub$: Subscription;
    getSingleSub$: Subscription;
    getAllSub$: Subscription;
    constructor(private <%= camelize(name) %>Servivce: <%= classify(name) %>Service) {
    }

    ngOnInit() {
        this.getAll<%= classify(name)%>();
    }

    getAll<%= classify(name)%>() {
        this.getAllSub$ = this.<%= camelize(name) %>Servivce.getAll<%= classify(name) %>s(this.requestModel).subscribe((data) => {
            this.<%= camelize(name) %>Models = {...data};
        });
    }

    onCreate<%= classify(name) %>(model: <%= classify(name) %>CreateModel) {
        this.createSub$ = this.<%= camelize(name) %>Servivce.create<%= classify(name) %>(model).subscribe((data) => {

        });
    }

    onUpdate<%= classify(name) %>(model: <%= classify(name) %>UpdateModel) {
        this.updateSub$ = this.<%= camelize(name) %>Servivce.update<%= classify(name) %>(model).subscribe((data) => {

        });
    }

    onEdit<%= classify(name) %>(model: any) {

    }

    onRemoval<%= classify(name) %>(model: any) {

    }

    onDelete<%= classify(name) %>(id: number) {
        this.deleteSub$ = this.<%= camelize(name) %>Servivce.delete<%= classify(name) %>(id).subscribe((data) => {

        });
    }
}
