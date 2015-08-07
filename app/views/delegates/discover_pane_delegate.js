Breakingbugs.discoverPaneDelegate = Alto.Object.create({

    // display methods
    displayDiscoverPane: function () {
        Breakingbugs.discoverPane = Breakingbugs.DiscoverPane.create({
            attachToNode: 'body'
        })

        Breakingbugs.set('keyResponder', Breakingbugs.discoverPane);
    },

    // remove methods
    removeDiscoverPane: function () {
        Breakingbugs.set('keyResponder', null);
        Alto.DomUtil.removeView('Breakingbugs.discoverPane');
    }

});