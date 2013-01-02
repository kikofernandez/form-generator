Ext.define('PlusValue.view.forms.SecondForm', {
	extend: 'Ext.form.Panel',
    xtype: 'secondform',
    id: 'secondformid',
    fullscreen: true,
    
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],
    
    config: {
    	flex: 4,
    	items: [
    	    {
    	    	xtype: 'fieldset',
    	    	title: 'Aqui va otra pregunta',
    	    	layout: {
    	    		type: 'hbox',
    	    	},
    	    	
    	    	items: [
    	    	    {
					  xtype: 'radiofield',
					  name : 'question1',
					  label: 'Bien',
					  value: 'bien',
					  flex: 1,
					  checked: true
					},
					{
					  xtype: 'radiofield',
					  name : 'question1',
					  label: 'Regular',
					  flex: 1,
					  value: 'regular'
					},
					{
						xtype: 'radiofield',
						name : 'question1',
						label: 'mal',
						flex: 1,
						value: 'mal'
					}
    	    	]
    	    },
		]
    }
});
