Ext.define('PlusValue.view.Main', {
	extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.Button',
        'Ext.Panel'
    ],
    config: {
    	width: '100%',
    	height: '100%',
    	fullscreen: true,
    	layout: 'vbox',
    	scrollable: {
    		direction: 'vertical',
    		directionLock: true
    	},
    	
        items: [
            {
            	xtype: 'panel',
            	layout: 'hbox',
            	flex: 1,
            	items: [
					{
						xtype: 'button',
						id: 'newEvaluation',
						itemId: 'newEvaluation',
						text: 'Nueva Evaluacion',
						flex: 1,
						margin: '5%',
					},
					{
						xtype: 'button',
						text: 'Historial',
						flex: 1,
						margin: '5%',
					}
            	]
            },
            {
            	xtype: 'panel',
            	layout: 'hbox',
            	flex: 1,
            	items: [
					{
						xtype: 'button',
						text: 'Graficos',
						flex: 1,
						margin: '5%',
					},
					{
						xtype: 'button',
						text: 'Generar Excel',
						flex: 1,
						margin: '5%',
					}
            	]
            },
        ],
        
        listeners: [
            {
            	delegate: '#newEvaluation',
            	event: 'tap',
            	fn: 'startNewEvaluation'
            }
        ],
    },
    
    startNewEvaluation: function(){
    	this.fireEvent('startNewEvaluation', this);
    }
});
