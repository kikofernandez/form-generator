Ext.define('PlusValue.view.NewReport', {
	extend: 'Ext.Panel',
    xtype: 'newreport',
//    id: 'newreportid',
    
    requires: [
        'Ext.Carousel',
        'Ext.Panel',
        'PlusValue.view.forms.BasicForm'
    ],
    config: {
    	width: '100%',
    	height: '100%',
    	fullscreen: true,
    	layout: 'vbox',
    	itemId: 'newreportid',
//    	scrollable: {
//    		direction: 'vertical',
//    		directionLock: true
//    	},
    	
        items: [
            {
            	xtype: 'toolbar',
            	docked: 'top',
            	title: 'Formulario',
            	
            	items: [
            	    {
            	    	xtype: 'button',
            	    	text: 'Atras',
            	    	id: 'backToMainFromNewReport'
            	    },
            	    { xtype: 'spacer' },
            	    {
            	    	xtype: 'button',
            	    	text: 'Finalizar'
            	    }
            	]
            },
            {
            	xtype: 'panel',
            	flex: 4,
            	scrollable: {
            		direction: 'vertical',
            		directionLock: true
            	},
            	layout: 'card',
            	itemId: 'changeableform',
//            	id: 'changeableformid', // Ext.getCmp
            	itemId: 'changeableformid',
            	items: [
            	    {
            	    	xtype: 'basicform'
            	    }
            	]
            },
            {
            	xtype: 'carousel',
            	direction: 'horizontal',
            	flex: 1,
            	itemId: 'carouselReport',
//            	id: 'carouselReport',
            	
            	items: [
            	    {
            	    	xtype: 'panel',
            	    	title: 'Basico',
            	    	id: 'formBasic1',
            	    	xtypeToLoad: 'PlusValue.view.forms.BasicForm',
            	    	idToLoad: 'basicformid',
            	    	itemIdToLoad: 'basicformid',
            	    	html: 'Formulario Basico',
            	    	flex: 1,
            	    	style: {
            	    		'text-align': 'center'
            	    	}
            	    },
            	    {
            	    	xtype: 'panel',
            	    	title: 'form2',
            	    	id: 'formBasic2',
            	    	itemIdToLoad: 'secondformid',
            	    	html: 'Formulario 2',
            	    	xtypeToLoad: 'PlusValue.view.forms.SecondForm',
            	    	idToLoad: 'secondformid',
            	    	flex: 1,
            	    	style: {
            	    		'text-align': 'center'
            	    	}
            	    }
            	],
            	
            	listeners: [
            	    {
            	    	element: 'element',
            	    	event: 'tap',
                        fn: function(event, node, options, eOpts) {
                        	console.log('tapped carousel');
                        	this.fireEvent('clickCarousel', this);
                        }
            	    }
            	]
            }
        ],
        
        listeners: [
            {
            	delegate: '#backToMainFromNewReport',
            	event: 'tap',
            	fn: 'backToMainFromNewReport'
            }
        ]
    },
    
    backToMainFromNewReport: function(){
    	this.fireEvent('backToMainFromNewReport');
    }
});
