Breakingbugs.BugDetailState = Alto.State.extend({

    enterState: function() {
        Breakingbugs.bugDetailView = Breakingbugs.BugDetailView.create();
    },

    goToNavigationState: function () {
        Breakingbugs.router.goToRoute('#/navigation');
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.bugDetailView');
    }

});