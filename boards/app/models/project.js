import DS from 'ember-data';

export default DS.Model.extend({

name:DS.attr('string'),
description:Ds.attr('date'),
startDate:Ds.attr('date'),
dueDate:Ds.attr('date'),
owner:Ds.attr('developer')
});
