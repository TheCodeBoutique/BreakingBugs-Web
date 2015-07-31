Breakingbugs.BugDetailView = Alto.View.extend({
	classNames: ['bug-detail-frame'],
    childViews: ['documentFrame'],
    attachToNode: 'body',

    documentFrame: Alto.View.extend({
        classNames: ['document-frame'],
        childViews: ['actionFrame', 'bugView'],

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

            bugView: Alto.View.extend({
                classNames: ['bug-view'],
                childViews: ['titleLabel', 'projectLabel', 'priorityLabel', 'assignedToLabel', 'statusLabel', 'componentLabel', 'osLabel', 'browserLabel', 'milestoneLabel', 'reproducibleLabel', 'descriptionLabel', 'resultsLabel', 'stepsToReproduceLabel'],

                	titleLabel: Alto.KeyLabelView.extend({
                		// classNames: [],
                		// tag: 'div',
                		keyTitle: 'Title: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.title'
                	}),

                	projectLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Project: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.project'
                	}),

                	priorityLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Priority: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.priority'
                	}),

                	assignedToLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Assigned To: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.assignedTo'
                	}),

                	statusLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Status: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.status'
                	}),

                	componentLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Component: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.component'
                	}),

                	osLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'OS: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.os'
                	}),

                	browserLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Browser: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.browser'
                	}),

                	milestoneLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Milestone: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.milestone'
                	}),

                	reproducibleLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Reproducible: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.reproducible'
                	}),

                	descriptionLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Description: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.description'
                	}),

                	resultsLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Expected Results: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.results'
                	}),

                	stepsToReproduceLabel: Alto.KeyLabelView.extend({
                		classNames: [],
                		//tag: 'div',
                		keyTitle: 'Steps To Reproduce: ',
                		labelTitleBinding: 'Breakingbugs.bugDetailController.stepsToReproduce'
                	}),

                    

		    }),
            
		})
});