Ext.define('PlusValue.view.forms.BasicForm', {
	extend: 'Ext.form.Panel',
    xtype: 'basicform',
    
    items: [
        {
            xtype: 'checkboxfield',
            name : 'tomato',
            label: 'Tomato',
            value: 'tomato',
            checked: true
        },
        {
            xtype: 'checkboxfield',
            name : 'salami',
            label: 'Salami'
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                { xtype: 'spacer' },
                {
                    text: 'getValues',
                    handler: function() {
                        var form = Ext.ComponentQuery.query('formpanel')[0],
                            values = form.getValues();

                        Ext.Msg.alert(null,
                            "Tomato: " + ((values.tomato) ? "yes" : "no") +
                            "<br />Salami: " + ((values.salami) ? "yes" : "no")
                        );
                    }
                },
                { xtype: 'spacer' }
            ]
        }
    ]
});
