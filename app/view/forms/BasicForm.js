Ext.define('PlusValue.view.forms.BasicForm', {
	extend: 'Ext.form.Panel',
    xtype: 'basicform',
//    id: 'basicformid', // Ext.getCmp
    fullscreen: true,
    
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],
    
    config: {
    	flex: 4,
    	itemId: 'basicformid',
    	
    	items: [
    	    {
    	    	xtype: 'fieldset',
    	    	title: 'Aqui va la primera pregunta',
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
    	    {
    	    	xtype: 'fieldset',
    	    	title: 'Esta esto bien hecho?',
    	    	layout: {
    	    		type: 'hbox',
    	    	},
    	    	
    	    	items: [
    	    	    {
					  xtype: 'radiofield',
					  name : 'question2',
					  label: 'Bien',
					  value: 'bien',
					  flex: 1,
					  checked: true
					},
					{
					  xtype: 'radiofield',
					  name : 'question2',
					  label: 'Regular',
					  flex: 1,
					  value: 'regular'
					},
					{
						xtype: 'radiofield',
						name : 'question2',
						label: 'mal',
						flex: 1,
						value: 'mal'
					}
    	    	]
    	    },
    	    {
    	    	xtype: 'fieldset',
    	    	title: 'Otra pregunta mas...',
    	    	layout: {
    	    		type: 'hbox',
    	    	},
    	    	
    	    	items: [
    	    	    {
					  xtype: 'radiofield',
					  name : 'question3',
					  label: 'Bien',
					  value: 'bien',
					  flex: 1,
					  checked: true
					},
					{
					  xtype: 'radiofield',
					  name : 'question3',
					  label: 'Regular',
					  flex: 1,
					  value: 'regular'
					},
					{
						xtype: 'radiofield',
						name : 'question3',
						label: 'mal',
						flex: 1,
						value: 'mal'
					}
    	    	]
    	    },
		]
    }
});
