Breakingbugs.DashboardView = Alto.View.extend ({
    classNames: ['feature-request-frame'],
    childViews: ['documentFrame'],
    attachToNode: 'body',

    documentFrame: Alto.View.extend({
        classNames: ['document-frame'],
        childViews: ['actionFrame', 'scrollView'],

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

        scrollView: Alto.View.extend({
            classNames: ['scroll-view'],
            childViews: ['sortSelectView',/*'title', 'projectTitle', 'priorityTitle', 'statusTitle', 'assignedToTitle',*/ 'listView'],

            sortSelectView: Alto.View.extend({
                childViews: ['keyLabel', 'priorityCheckbox', 'milestoneCheckbox', 'statusCheckbox', 'assignedToCheckbox', 'seeAllCheckbox'],
                classNames: ['select-frame'],

                keyLabel: Alto.LabelView.extend({
                    classNames: ['select-label'],
                    tag: 'div',
                    title: 'Sort By:',
                }),

                priorityCheckbox: Alto.Checkbox.extend({
                    classNames: ['box-title'], 
                    title: 'Priority',
                    isRadio: true,
                    isCheckedBinding: 'Breakingbugs.dashboardController.priority'                     
                }),

                milestoneCheckbox: Alto.Checkbox.extend({
                    classNames: ['box-title'],  
                    title: 'Milestone',
                    isRadio: true,
                    isCheckedBinding: 'Breakingbugs.dashboardController.milestone'                       
                }),

                statusCheckbox: Alto.Checkbox.extend({
                    classNames: ['box-title'],  
                    title: 'Status',
                    isRadio: true,
                    isCheckedBinding: 'Breakingbugs.dashboardController.status'                       
                }),

                assignedToCheckbox: Alto.Checkbox.extend({
                    classNames: ['box-title'],
                    title: 'Assigned To',
                    isRadio: true,
                    isCheckedBinding: 'Breakingbugs.dashboardController.assignedTo'
                }),

                seeAllCheckbox: Alto.Checkbox.extend({
                    classNames: ['box-title'],
                    title: 'See All',
                    isRadio: false,
                    isCheckedBinding: 'Breakingbugs.dashboardController.seeAll'
                })

            }),

            // title: Alto.LabelView.extend({
            //     classNames: ['list-title'],
            //     tag: 'div',
            //     title: 'Title'
            // }),

            // projectTitle: Alto.LabelView.extend({
            //     classNames: ['list-title'],
            //     tag: 'div',
            //     title: 'Project'
            // }),

            // priorityTitle: Alto.LabelView.extend({
            //     classNames: ['list-title'],
            //     tag: 'div',
            //     title: 'Priority'
            // }),

            // statusTitle: Alto.LabelView.extend({
            //     classNames: ['list-title'],
            //     tag: 'div',
            //     title: 'Status'
            // }),

            // assignedToTitle: Alto.LabelView.extend({
            //     classNames: ['list-title'],
            //     tag: 'div',
            //     title: 'Assigned To'
            // }),

            listView: Alto.ListView.extend({
                classNames: ['list-view'],
                dataBinding: 'Breakingbugs.fetchBugsController.arrangedContent',

                cell: Alto.Cell.extend(Alto.ClickEvents, {
                    classNames: ['record-cell'],
                    childViews: ['titleLabel', 'projectLabel', 'priorityLabel', 'statusLabel', 'assignedToLabel'],
                    action: 'goToBugDetailState',
                    selectionBinding: 'Breakingbugs.bugDetailController.content',

                    titleLabel: Alto.LabelView.extend({
                        classNames: ['record-title'],
                        tag: 'div',
                        titleBinding: 'parentView.data.title'
                    }),

                    projectLabel: Alto.LabelView.extend({
                        classNames: ['record-project'],
                        tag: 'div',
                        titleBinding: 'parentView.data.project'
                    }),

                    priorityLabel: Alto.LabelView.extend({
                        classNames: ['record-priority'],
                        tag: 'div',
                        titleBinding: 'parentView.data.priority'
                    }),

                    statusLabel: Alto.LabelView.extend({
                        classNames: ['record-status'],
                        tag: 'div',
                        titleBinding: 'parentView.data.status'
                    }),

                    assignedToLabel: Alto.LabelView.extend({
                        classNames: ['record-assignedTo'],
                        tag: 'div',
                        titleBinding: 'parentView.data.assignedTo'
                    }),

                    //assignedToLabel: Alto.View.extend({
                    //    childViews: ['keyLabel', 'selectMenu'],
                    //    classNames: ['select-frame', 'record-assignedTo'],
                    //
                    //    keyLabel: Alto.LabelView.extend({
                    //        classNames: ['select-label'],
                    //        tag: 'div',
                    //        title: 'Assigned To',
                    //    }),
                    //
                    //    selectMenu: Alto.SelectView.extend({
                    //        classNames: ['select-view'],
                    //        options: Alto.String.loc('USER_EMAILS'),
                    //        selectedOptionBinding: 'parentView.data.assignedTo'
                    //    })
                    //}),
            })

})    

}),

            
})
});