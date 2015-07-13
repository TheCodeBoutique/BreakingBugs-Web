Breakingbugs.NavigationState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.navigationView = Breakingbugs.NavigationView.create();
    },

    didSelectNavigationItem: function(sender) {
        var route = sender.data.get('route');

        Breakingbugs.router.goToRoute(route);
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.navigationView');
    }

});