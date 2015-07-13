Breakingbugs.SearchState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.searchView = Breakingbugs.SearchView.create();
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.searchView');
    }

});