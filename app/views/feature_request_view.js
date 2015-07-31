Breakingbugs.FeatureRequestView = Alto.View.extend ({
    classNames: ['feature-request-frame'],
    childViews: ['documentFrame'],
    attachToNode: 'body',

    documentFrame: Alto.View.extend({
        classNames: ['document-frame'],
        childViews: ['actionFrame', 'projectSelectView', 'whoLabelView', 'whatFrame', 'whyFrame', 'buttonsFrame'],

        actionFrame: Alto.View.extend({
            classNames: ['action-frame'],
            childViews: ['hamburgerButton', 'applicationTitleLabel'],

            hamburgerButton: Alto.ButtonView.extend({
                classNames: ['action-button'],
                leftIcon: 'theme/images/hamburger.png',
                action: 'goToNavigationState'
            }),

            applicationTitleLabel: Alto.LabelView.extend({
                classNames: ['application-title-label'],
                title: Alto.String.loc('APPLICATION_TITLE')
            })

        }),

        projectSelectView: Alto.View.extend({
            childViews: ['keyLabel', 'selectMenu'],
            classNames: ['select-frame'],

            keyLabel: Alto.LabelView.extend({
            classNames: ['select-label'],
            tag: 'div',
            title: Alto.String.loc('FILE_BUG_PROJECT'),
        }),

        selectMenu: Alto.SelectView.extend({
            classNames: ['select-view'],
            options: Alto.String.loc('FILE_BUG_PROJECT_OPTIONS'),
            selectedOptionBinding: 'Breakingbugs.fileFeatureController.project'
        })

    }),

        whoLabelView: Alto.KeyFormView.extend(Alto.formValidationMixin, {
            classNames: ['key-form-view', 'key-label'],
            keyLabelTitle: 'Occupation/Role',
            formValueBinding: 'Breakingbugs.fileFeatureController.who'
        }),

        whatFrame: Alto.View.extend(Alto.formValidationMixin, {
            classNames: ['description-frame'],
            childViews: ['whatLabel', 'whatTextArea'],

            whatLabel: Alto.LabelView.extend({
                classNames: ['description-label'],
                title: 'Requested Feature:'
            }),

            whatTextArea: Alto.TextArea.extend({
                classNames: ['description-text-area'],
                valueBinding: 'Breakingbugs.fileFeatureController.what'

            })

        }),

        whyFrame: Alto.View.extend({
            classNames: ['description-frame'],
            childViews: ['whyLabel', 'whyTextArea'],

            whyLabel: Alto.LabelView.extend({
                classNames: ['description-label'],
                title: 'Reason for Feature:'
            }),

            whyTextArea: Alto.TextArea.extend({
                classNames: ['description-text-area'],
                valueBinding: 'Breakingbugs.fileFeatureController.why'

            })

        }),

        buttonsFrame: Alto.View.extend({
            classNames: [],
            childViews: ['submitButton', 'cancelButton'],

            submitButton: Alto.ButtonView.extend({
                classNames: ['button-class'],
                title: 'Submit',
                // rightIcon: 'url',                        //path to image
                action: 'saveBugReport',
                doValidateForms: true,
            }),

            cancelButton: Alto.ButtonView.extend({
                classNames: ['button-class'],
                title: 'Cancel',
                doResetFormValidationContainer: true,
                //action: ''        create cancel method
            })    
})

})

});

