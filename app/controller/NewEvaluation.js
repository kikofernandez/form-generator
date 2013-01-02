Ext.define('PlusValue.controller.NewEvaluation', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'PlusValue.view.NewReport',
        'PlusValue.view.forms.BasicForm',
    ],
    
    config: {
        refs: {
           main: 'main',
           newReport: 'newreport',
           carouselReport: '#carouselReport',
           basicForm: 'basicform'
        },
        control: {
        	main: {
        		startNewEvaluation: 'onStartNewEvaluation'
        	},
        	newReport: {
        		backToMainFromNewReport: 'onBackToMainFromNewReport'
        	},
        	carouselReport: {
        		clickCarousel: 'onClickCarousel'
        	}
        }
    },
    
    onStartNewEvaluation: function(component, view){
    	var newReport = this.getNewReport();
    	if(!newReport){
    		newReport = Ext.create('PlusValue.view.NewReport');
    	}
    	Ext.Viewport.setActiveItem(newReport);
    },
    
    onBackToMainFromNewReport: function(component, view){
    	var main = this.getMain();
    	Ext.Viewport.setActiveItem(main);
    },
    
    onClickCarousel: function(component, view){
    	// We select the form from the attr toLoad
    	var formToLoad = Ext.getCmp('carouselReport').getActiveItem();
    	var formCmp = Ext.getCmp(formToLoad.idToLoad);
    	if(!formCmp){
    		// create the form
    		console.log('create');
        	formCmp = Ext.create(formToLoad.xtypeToLoad);
    	}
    	
    	// Update the form panel when clicking in the carousel
    	var changeable = Ext.getCmp('changeableformid');
    	console.log(changeable);
    	changeable.setActiveItem(formCmp);
    }
    
    //called when the Application is launched, remove if not needed
//    launch: function(app) {
//        
//    }
});