import Route from '@ember/routing/route';

export default Route.extend({
model(){
  let src {};
  Object.assign(this.get('model'));
  return src;
}
templateName:'contact/add',
  actions:{

  }
});
