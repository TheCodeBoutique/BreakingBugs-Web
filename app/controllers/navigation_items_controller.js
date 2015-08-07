Breakingbugs.navigationItemsController = Alto.ArrayController.create ({

    content: [
        Alto.Object.create({title: Alto.String.loc('DASHBOARD_NAVIGATION_TITLE'), route: '#/dashboard'}),
        Alto.Object.create({title: Alto.String.loc('NEW_BUG_NAVIGATION_TITLE'), route: '#/fileBug'}),
        Alto.Object.create({title: Alto.String.loc('FEATURE_REQUEST_NAVIGATION_TITLE'), route: '#/featureRequest'}),
        Alto.Object.create({title: Alto.String.loc('BRB_NAVIGATION_TITLE'),route: '#/bring-your-bugs'}),
        Alto.Object.create({title: Alto.String.loc('MILESTONE_NAVIGATION_TITLE'), route: '#/milestone'}),
        Alto.Object.create({title: Alto.String.loc('SEARCH_NAVIGATION_TITLE'), route: '#/search'})
    ]

});