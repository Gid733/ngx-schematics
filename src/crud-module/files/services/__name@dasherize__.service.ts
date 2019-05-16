import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from 'src/app/common/services/base.service';

import {
    <%= classify(name) %>Models,
    <%= classify(name) %>Model,
    <%= classify(name) %>RequestModel,
    <%= classify(name) %>CreateModel,
    <%= classify(name) %>UpdateModel,
} from '../models';

export let <%= classify(name) %>Methods = {
  Base: 'api/<%= dasherize(name) %>',
};

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {

  constructor(private base: BaseService) {}

  getAll<%= classify(name) %>s(model: <%= classify(name) %>RequestModel): Observable<<%= classify(name) %>Models> {
    return this.base.get(<%= classify(name) %>Methods.Base, {params: model});
  }

  get<%= classify(name) %>(id: number): Observable<<%= classify(name) %>Model> {
    return this.base.get(<%= classify(name) %>Methods.Base + '/' + id);
  }

  create<%= classify(name) %>(model: <%= classify(name) %>CreateModel): Observable<<%= classify(name) %>Model> {
    return this.base.post(<%= classify(name) %>Methods.Base, model);
  }

  update<%= classify(name) %>(model: <%= classify(name) %>UpdateModel): Observable<<%= classify(name) %>Model> {
    return this.base.post(<%= classify(name) %>Methods.Base, model);
  }

  delete<%= classify(name) %>(id: number): Observable<any> {
    return this.base.post(<%= classify(name) %>Methods.Base, + '/' + id);
  }
}
