Breakingbugs.BringYourBugsState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.bringYourBugsView = Breakingbugs.BringYourBugsView.create();
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.bringYourBugsView');
    }

});