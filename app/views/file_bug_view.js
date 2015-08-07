Breakingbugs.FileBugView = Alto.View.extend({
  classNames: ['file-bug-frame'],
  childViews: ['documentFrame'],
  attachToNode: 'body',

  documentFrame: Alto.View.extend({
    classNames: ['document-frame'],
    childViews: ['actionFrame', 'titleLabelView', 'projectSelectView', 'osSelectView', 'browserSelectView', 'milestoneLabelView', 'componentSelectView', 'reproduceSelectView', 'prioritySelectView', 'descriptionFrame', 'resultsFrame', 'stepsFrame', 'buttonsFrame'],

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

    titleLabelView: Alto.KeyFormView.extend(Alto.formValidationMixin,{
      classNames: [],
      keyLabelTitle: Alto.String.loc('FILE_BUG_TITLE'),
      formValueBinding: 'Breakingbugs.fileBugController.title',
      formType: 'text',
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
        selectedOptionBinding: 'Breakingbugs.fileBugController.project',
      })

    }),

    osSelectView: Alto.View.extend({
      childViews: ['keyLabel', 'selectMenu'],
      classNames: ['select-frame'],

      keyLabel: Alto.LabelView.extend({
        classNames: ['select-label'],
        tag: 'div',
        title: 'OS'
      }),

      selectMenu: Alto.SelectView.extend({
        classNames: ['select-view'],
        options: ['', 'OS X', 'Windows', 'Linux', 'iOS', 'Android'],
        selectedOptionBinding: 'Breakingbugs.fileBugController.os'
      })

    }),

    browserSelectView: Alto.View.extend({
      childViews: ['keyLabel', 'selectMenu'],
      classNames: ['select-frame'],

      keyLabel: Alto.LabelView.extend({
        classNames: ['select-label'],
        tag: 'div',
        title: 'Browser'
      }),

      selectMenu: Alto.SelectView.extend({
        classNames: ['select-view'],
        options: ['', 'Chrome', 'Firefox', 'Internet Explorer', 'Safari'],
        selectedOptionBinding: 'Breakingbugs.fileBugController.browser'
      })

    }),

    milestoneLabelView: Alto.KeyFormView.extend(Alto.formValidationMixin, {
      classNames:['key-form-frame'],
        keyLabelTitle: 'Milestone:',                                                // ask chad about alto.string.loc 
        formValueBinding: 'Breakingbugs.fileBugController.milestone',
        formType: 'text'         
      }),

    componentSelectView: Alto.View.extend({
      childViews: ['keyLabel', 'serverCheckbox', 'iosCheckbox', 'webCheckbox'],
      classNames: ['select-frame'],

      keyLabel: Alto.LabelView.extend({
        classNames: ['select-label'],
        tag: 'div',
        title: 'Component:'
      }),

      serverCheckbox: Alto.Checkbox.extend({
        classNames: ['box-title'], 
        title: 'Server',
        isRadio: true,                    // find out how to bind checked/unchecked value of checkbox
        isCheckedBinding: 'Breakingbugs.fileBugController.isServer'
      }),

      iosCheckbox: Alto.Checkbox.extend({
       classNames: ['box-title'],  
       title: 'iOS',
       isRadio: true,
       isCheckedBinding: 'Breakingbugs.fileBugController.isIos'                     
      }),

      webCheckbox: Alto.Checkbox.extend({
       classNames: ['box-title'],  
       title: 'Web',
       isRadio: true,
       isCheckedBinding: 'Breakingbugs.fileBugController.isWeb'                     
      }),

    }),

reproduceSelectView: Alto.View.extend({
  childViews: ['keyLabel', 'alwaysCheckbox', 'sometimesCheckbox', 'rarelyCheckbox', 'dntCheckbox', 'naCheckbox'],
  classNames: ['select-frame'],

  keyLabel: Alto.LabelView.extend({
    classNames: ['select-label'],
    tag: 'div',
    title: 'Reproducible:',
  }),

  alwaysCheckbox: Alto.Checkbox.extend({
   classNames: ['box-title'], 
   title: 'Always',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isAlways'                     
 }),

  sometimesCheckbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: 'Sometimes',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isSometimes'                     
 }),

  rarelyCheckbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: 'Rarely',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isRarely'                     
 }),

  dntCheckbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: 'Did Not Try',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isDnt'                     
 }),

  naCheckbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: 'Not Applicable',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isNA'                    
 }),

}),

prioritySelectView: Alto.View.extend({
  childViews: ['keyLabel', 'p1Checkbox', 'p2Checkbox', 'p3Checkbox', 'p4Checkbox', 'p5Checkbox'],
  classNames: ['select-frame'],

  keyLabel: Alto.LabelView.extend({
    classNames: ['select-label'],
    tag: 'div',
    title: 'Priority:',
  }),

  p1Checkbox: Alto.Checkbox.extend({
   classNames: ['box-title'], 
   title: '1',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isP1'                     
 }),

  p2Checkbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: '2',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isP2'                       
 }),

  p3Checkbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: '3',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isP3'                       
 }),

  p4Checkbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: '4',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isP4'                       
 }),

  p5Checkbox: Alto.Checkbox.extend({
   classNames: ['box-title'],  
   title: '5',
   isRadio: true,
   isCheckedBinding: 'Breakingbugs.fileBugController.isP5'                       
 }),

}),

descriptionFrame: Alto.View.extend({
  classNames: ['description-frame'],
  childViews: ['descriptionLabel', 'descriptionTextArea'],

  descriptionLabel: Alto.LabelView.extend({
    classNames: ['description-label'],
    title: 'Description'
  }),

  descriptionTextArea: Alto.TextArea.extend({
    classNames: ['description-text-area'],
    valueBinding: 'Breakingbugs.fileBugController.description'

  })

}),

resultsFrame: Alto.View.extend({
  classNames: ['description-frame'],
  childViews: ['resultsLabel', 'resultsTextArea'],

  resultsLabel: Alto.LabelView.extend({
    classNames: ['description-label'],
    title: 'Expected Results'
  }),

  resultsTextArea: Alto.TextArea.extend({
    classNames: ['results-text-area'],
    valueBinding: 'Breakingbugs.fileBugController.results'
  })

}),

stepsFrame: Alto.View.extend({
  classNames: ['description-frame'],
  childViews: ['stepsLabel', 'stepsTextArea'],

  stepsLabel: Alto.LabelView.extend({
    classNames: ['description-label'],
    title: 'Steps to Reproduce:'
  }),

  stepsTextArea: Alto.TextArea.extend({
    classNames: ['steps-text-area'],
    valueBinding: 'Breakingbugs.fileBugController.stepsToReproduce'
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

})
