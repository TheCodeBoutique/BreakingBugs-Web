Breakingbugs.router = Alto.Router.create({

    index: {
        route: 'index.html',
        state: 'authenticationState'
    },

    navigation: {
        route: '#/navigation',
        state: 'navigationState'
    },

    dashboard: {
        route: '#/dashboard',
        state: 'dashboardState',

        unique_id: {
            route: '#/dashboard/:id',
            state: 'bugDetailState'
        }
    },

    fileBug: {
        route: '#/fileBug',
        state: 'fileBugState'
    },

    featureRequest: {
        route: '#/featureRequest',
        state: 'featureRequestState'
    },

    bringYourBugs: {
        route: '#/bringyourbugs',
        state: 'bringYourBugsState'
    },

    milestone: {
        route: '#/milestone',
        state: 'milestoneState'
    },

    search: {
        route: '#/search',
        state: 'searchState'
    }

});

