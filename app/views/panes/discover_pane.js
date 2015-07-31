Breakingbugs.DiscoverPane = Alto.View.extend({
    classNames: ['discover-pane'],
    childViews: ['topToolbarView', 'middleSection', 'bottomToolbarView'],

    cancelAction: 'cancel',
    submitAction: 'discoverUser',

    topToolbarView: Alto.View.extend({
        classNames: ['top-toolbar-view'],
        childViews: ['titleLabelView'],

        titleLabelView: Alto.LabelView.extend({
            classNames: ['toolbar-title-view'],
            title: 'Create User Profile',
            tag: 'div'
        })

    }),

    middleSection: Alto.View.extend({
        classNames: ['middle-section'],
        childViews: ['contentWrapperView'],

        contentWrapperView: Alto.View.extend({
            classNames: ['content-wrapper-view'],
            childViews: ['basicInformationWrapper'],

            basicInformationWrapper: Alto.View.extend({
                classNames: ['basic-information-wrapper'],
                childViews: ['sectionTitleView', 'formWrapperView'],

                sectionTitleView: Alto.LabelView.extend({
                    classNames: ['section-title-view'],
                    title: 'Profile:',
                    tag: 'div'
                }),

                formWrapperView: Alto.View.extend({
                    classNames: ['form-wrapper-view'],
                    childViews: ['emailInputView', 'firstNameInputView', 'lastNameInputView'],

                    emailInputView: Alto.KeyFormView.extend(Alto.formValidationMixin, {
                        keyLabelClassNames: ['key-label-view'],
                        formViewClassNames: ['form-view'],
                        keyLabelTitle: 'Email:',
                        formType: 'text',
                        formValueBinding:  "Breakingbugs.discoverUserController.email",
                        isDefaultFocus: true
                    }),

                    firstNameInputView: Alto.KeyFormView.extend({
                        keyLabelClassNames: ['key-label-view'],
                        formViewClassNames: ['form-view'],
                        keyLabelTitle: 'First name:',
                        formType: 'text',
                        formValueBinding: "Breakingbugs.discoverUserController.firstName",
                    }),

                    lastNameInputView: Alto.KeyFormView.extend({
                        keyLabelClassNames: ['key-label-view'],
                        formViewClassNames: ['form-view'],
                        keyLabelTitle: 'Last name:',
                        formType: 'text',
                        formValueBinding:  "Breakingbugs.discoverUserController.lastName"
                    })

                })

            })

        })

    }),

    bottomToolbarView: Alto.View.extend({
        classNames: ['bottom-toolbar-view'],
        childViews: ['actionButtonsFrame'],

        actionButtonsFrame: Alto.View.extend({
            classNames: ['action-buttons-frame'],
            childViews: ['floatContainer'],

            floatContainer: Alto.View.extend({
                classNames: ['float-container'],
                childViews: ['cancelButton', 'saveButton'],

                cancelButton: Alto.ButtonView.extend({
                    classNames: ['alto-text-button-attention', 'cancel-button'],
                    title: 'Cancel',
                    action: 'cancel'
                }),

                saveButton: Alto.ButtonView.extend({
                    classNames: ['alto-text-button-main', 'save-button'],
                    title: 'Save',
                    action: 'discoverUser'
                })

            })

        })

    })

});