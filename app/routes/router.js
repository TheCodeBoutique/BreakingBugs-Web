Breakingbugs.router = Alto.Router.create({

    index: {
        route: 'index.html',
        state: 'NavigationState'
    },

    navigation: {
        route: '#/navigation',
        state: 'NavigationState'
    },

    dashboard: {
        route: '#/dashboard',
        state: 'DashboardState'
    },

    fileBug: {
        route: '#/file-bug',
        state: 'FileBugState'
    },

    featureRequest: {
        route: '#/feature-request',
        state: 'FeatureRequestState'
    },

    bringYourBugs: {
        route: '#/bring-your-bugs',
        state: 'BringYourBugsState'
    },

    milestone: {
        route: '#/milestone',
        state: 'MilestoneState'
    },

    search: {
        route: '#/search',
        state: 'SearchState'
    }

});

