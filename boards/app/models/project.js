import DS from 'ember-data';

export default DS.Model.extend({

name:DS.attr('string'),
description:DS.attr('date'),
startDate:DS.attr('date'),
dueDate:DS.attr('date'),
owner:DS.belongsTo('developer')
});
