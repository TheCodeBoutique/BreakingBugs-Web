Breakingbugs.dashboardController = Alto.ObjectController.createWithMixins ({

	filterBy: '',

	priority: false, milestone: false, assignedTo: false, status: false, seeAll:false,

	priorityDidChange: function () {
		if (this.get('priority')) {
			this.set('milestone', false);
			this.set('assignedTo', false);
			this.set('status', false);
			this.set('filterBy', 'priority');
		}
	}.observes('priority'),

	milestoneDidChange: function () {
		if (this.get('milestone')) {
			this.set('priority', false);
			this.set('assignedTo', false);
			this.set('status', false);
			this.set('filterBy', 'milestone');
		}
	}.observes('milestone'),

	assignedToDidChange: function () {
		if (this.get('assignedTo')) {
			this.set('milestone', false);
			this.set('priority', false);
			this.set('status', false);
			this.set('filterBy', 'assignedTo');
		}
	}.observes('assignedTo'),

	statusDidChange: function () {
		if (this.get('status')) {
			this.set('milestone', false);
			this.set('assignedTo', false);
			this.set('priority', false);
			this.set('filterBy', 'status');
		}
	}.observes('status'),

	filterByDidChange: function() {
		Breakingbugs.fetchBugsController.set('sortProperties', [this.get('filterBy')])

	}.observes('filterBy'),

	seeAllDidChange: function () {
		if (this.get('seeAll')) {
			Breakingbugs.dashboardState.fetchAllBugReports();
		} else {
			Breakingbugs.dashboardState.fetchBugReports();
		}
	}.observes('seeAll'),

});