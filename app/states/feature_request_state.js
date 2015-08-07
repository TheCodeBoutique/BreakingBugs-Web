Breakingbugs.FeatureRequestState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.featureRequestView = Breakingbugs.FeatureRequestView.create();
        Breakingbugs.fileFeatureController.set('content', Breakingbugs.FeatureRequestRecord.create());
    },

    saveFeatureRequest: function() {
        var container = CloudKit.getDefaultContainer(),
            publicDB = container.publicCloudDatabase,
            dataStore = Breakingbugs.FeatureDatastore.create(),
            json = dataStore.deserializeFeatureRecords(Breakingbugs.fileFeatureController.get('content'));
            
        publicDB.saveRecord(json).then(function(response) {
            
        });
    },

    goToNavigationState: function () {
        Breakingbugs.router.goToRoute('#/navigation');
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.featureRequestView');
    }

});