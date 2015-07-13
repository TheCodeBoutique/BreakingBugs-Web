Breakingbugs.FeatureRequestState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.featureRequestView = Breakingbugs.FeatureRequestView.create();
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.featureRequestView');
    }

});