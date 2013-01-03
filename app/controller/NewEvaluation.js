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
    
    onStartNewEvaluation: function(component){
    	var newReport = this.getNewReport();
    	if(!newReport){
    		console.log('create');
    		newReport = Ext.create('PlusValue.view.NewReport');
    	}
    	Ext.Viewport.setActiveItem(newReport);
    },
    
    onBackToMainFromNewReport: function(component){
    	var main = this.getMain();
    	Ext.Viewport.setActiveItem(main);
    	
    	var newReport = this.getNewReport();
    	Ext.Viewport.remove(newReport, true);
    },
    
    onClickCarousel: function(component){
    	// We select the form from the attr toLoad
    	var formToLoad = component.getActiveItem();
    	var newReport = this.getNewReport();
    	var formCmp = newReport.getComponent(formToLoad.itemIdToLoad);
    	if(!formCmp){
    		// create the form
//    		console.log('create');
        	formCmp = Ext.create(formToLoad.xtypeToLoad);
    	}
    	
    	// Update the form panel when clicking in the carousel
    	var changeable = Ext.getCmp('changeableformid');
//    	console.log(changeable);
    	changeable.animateActiveItem(formCmp, {type: 'slide', direction: 'left'});
    }
    
    //called when the Application is launched, remove if not needed
//    launch: function(app) {
//        
//    }
});