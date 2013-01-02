Ext.define('PlusValue.view.NewReport', {
	extend: 'Ext.Panel',
    xtype: 'newreport',
    requires: [
        'Ext.Carousel',
        'Ext.Panel'
    ],
    config: {
    	width: '100%',
    	height: '100%',
    	fullscreen: true,
    	layout: 'vbox',
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
            	items: [
            	    {
            	    	xtype: 'panel',
            	    	html: 'Formulario 1'
            	    }
            	]
            },
            {
            	xtype: 'carousel',
            	direction: 'horizontal',
            	flex: 1,
            	itemId: 'carouselReport',
            	id: 'carouselReport',
//            	layout: 'fit',
            	
            	items: [
            	    {
            	    	xtype: 'panel',
            	    	title: 'Basico',
            	    	id: 'formBasic1',
            	    	html: 'Formulario Basico',
            	    	flex: 1
            	    },
            	    {
            	    	xtype: 'panel',
            	    	title: 'form2',
            	    	id: 'formBasic2',
            	    	html: 'Formulario 2',
            	    	flex: 1
            	    }
            	],
            	
            	listeners: [
            	    {
            	    	element: 'element',
            	    	event: 'tap',
                        fn: function(event, node, options, eOpts) {
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
