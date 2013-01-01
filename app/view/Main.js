Ext.define('PlusValue.view.Main', {
    //extend: 'Ext.tab.Panel',
	extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        //'Ext.TitleBar',
        //'Ext.Video',
        'Ext.Carousel',
        'Ext.Panel'
    ],
    config: {
//        tabBarPosition: 'bottom',
//    	width: '100%',
//    	height: '100%',
    	
        items: [
            {
            	xtype: 'carousel',
            	fullscreen: false,
//            	flex: 1,
            	docked: 'top',
            	direction: 'horizontal',
            	height: '170px',
            	width: '100%',
//            	layout: 'hbox',
            	
            	items: [
            	    {
            	    	xtype: 'panel',
            	    	html: 'Formulario 1'
            	    },
            	    {
            	    	xtype: 'panel',
            	    	html: 'Formulario 2'
            	    }
            	]
            },
            {
            	xtype: 'panel',
            	html: 'Jajajaaj',
            	flex: 1
            }
            /*
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
            */
        ]
    }
});
