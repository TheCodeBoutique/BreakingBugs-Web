Breakingbugs.DashboardState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.dashboardView = Breakingbugs.DashboardView.create();
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.dashboardView');
    }

});