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
           carouselReport: 'newreport #carouselReport',
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
    	console.log('inside controller');
    	// We select the form from the attr toLoad
    	var formToLoad = component.getActiveItem();
    	var newReport = this.getNewReport();
    	var changeable = newReport.getComponent('changeableformid');
    	
    	var formCmp = changeable.getComponent(formToLoad.itemIdToLoad);
    	console.log(formToLoad.itemIdToLoad);
    	try{
    		console.log(formCmp.getId());
    	}catch(e){
    		console.log('Does not exist the view');
    	}
    	if(!formCmp){
    		// create the form
    		console.log('create2');
        	formCmp = Ext.create(formToLoad.xtypeToLoad);
    	}
    	
    	// Update the form panel when clicking in the carousel
    	changeable.animateActiveItem(formCmp, {type: 'slide', direction: 'left'});
    }
    
    //called when the Application is launched, remove if not needed
//    launch: function(app) {
//        
//    }
});