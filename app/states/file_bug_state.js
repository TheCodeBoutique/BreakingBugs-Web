Breakingbugs.FileBugState = Alto.State.extend({

    enterState: function () {
        Breakingbugs.fileBugView = Breakingbugs.FileBugView.create();
        Breakingbugs.fileBugController.set('content', Breakingbugs.FileBugRecord.create());
    },

    goToNavigationState: function () {
        Breakingbugs.router.goToRoute('#/navigation');
    },

    exitState: function () {
        Alto.DomUtil.removeView('Breakingbugs.fileBugView');
    }

});