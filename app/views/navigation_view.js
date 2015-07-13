Breakingbugs.NavigationView = Alto.View.extend({
    classNames: ['navigation-frame'],
    childViews: ['applicationTitleDocumentFrame', 'navigationItemsFrame'],
    attachToNode: 'body',

    applicationTitleDocumentFrame: Alto.View.extend({
        classNames: ['application-title-document-frame'],
        childViews: ['applicationTitleLabel'],

        applicationTitleLabel: Alto.LabelView.extend({
            classNames: ['application-title-label'],
            title: Alto.String.loc('APPLICATION_TITLE')
        })

    }),

    navigationItemsFrame: Alto.View.extend({
        classNames: ['navigation-items-frame'],
        childViews: ['navigationListView'],

        navigationListView: Alto.ListView.extend({
            classNames: ['list-view'],
            dataBinding: 'Breakingbugs.navigationItemsController.content',

            cell: Alto.Cell.extend(Alto.ClickEvents, {
                classNames: ['cell'],
                childViews: ['title'],
                action: 'didSelectNavigationItem',

                title: Alto.LabelView.extend({
                    classNames: ['title'],
                    titleValueKey: 'title',
                    tag: 'div'
                })

            })

        })

    })

});