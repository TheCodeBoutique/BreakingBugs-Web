Breakingbugs.MilestoneState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.milestoneView = Breakingbugs.MilestoneView.create();
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.milestoneView');
    }

});