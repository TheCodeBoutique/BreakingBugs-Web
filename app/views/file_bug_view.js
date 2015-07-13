Breakingbugs.FileBugView = Alto.View.extend({
    classNames: ['file-bug-frame'],
    childViews: ['actionFrame', 'titleLabelView', 'projectSelectView', 'descriptionFrame'],
    attachToNode: 'body',

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

    titleLabelView: Alto.KeyFormView.extend({
        classNames: ['key-form-view'],
        keyLabelTitle: Alto.String.loc('FILE_BUG_TITLE'),
        formValueBinding: 'Breakingbugs.fileBugController.title'
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
            selectedOptionBinding: 'Breakingbugs.fileBugController.project'
        })

    }),

    descriptionFrame: Alto.View.extend({
        classNames: ['description-frame'],
        childViews: ['descriptionLabel', 'descriptionTextArea'],

        descriptionLabel: Alto.LabelView.extend({
            classNames: ['description-label'],
            title: 'Description'
        }),

        descriptionTextArea: Alto.TextArea.extend({
            classNames: ['description-text-area']
        })

    })

});