import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';

export default Route.extend({
  templateName:'projects/edit',
  afterModel( model){
    let copy = EmberObject.create(model.toJSON());
    set(model,'copy', copy);
    let devs = this.store.findAll('developer');
    set(model,'devs',devs);
    return model;
  },
  actions:{
    save(model){
      if(typeof(model.copy.owner)==="string"){
        set(model,'copy.owner',model.owner);
      }
      model.setProperties(model.copy);
      model.save().then(this.transitionTo('projects'));
    }
  }
});
