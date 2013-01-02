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
    	var carousel = Ext.getCmp('carouselReport').getActiveItem();
    	console.log('Selected: '+carousel.getId());
    	console.log(this.getBasicForm());
    	var basicForm = this.getBasicForm()
    	Ext.Viewport.setActiveItem(basicForm);
    }
    
    //called when the Application is launched, remove if not needed
//    launch: function(app) {
//        
//    }
});