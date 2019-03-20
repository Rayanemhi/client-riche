import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object'
export default Route.extend({
  //debugger;
  templateName:'developer/new',
  afterModel(model)
  { //declenchement une fois que le model est chargé
     set(model= EmberObject.create({copy:JSON.stringify(model)}));
         return model;

  }


});
