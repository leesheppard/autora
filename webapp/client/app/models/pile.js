import DS from 'ember-data';

export default DS.Model.extend({
  project: DS.belongsTo('project', {async: true}),
  // successfulEntry: DS.belongsTo('entry'),
  locked: DS.attr('boolean'),
  closingDate: DS.attr('date'),

  competingEntries: DS.hasMany('entry', {async: true}),


  createdAt: DS.attr('timestamp'),
  updatedAt: DS.attr('timestamp')
});
