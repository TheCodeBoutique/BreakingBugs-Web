Breakingbugs.fileBugController = Alto.ObjectController.createWithMixins ({

	isIos: false, isWeb: false, isServer:false,

	isIosDidChange: function () {

		if (this.get('isIos')) {
			this.set('isWeb', false);
			this.set('isServer', false);
			this.set('component', 'iOS');
		}

	}.observes('isIos'),

	isWebDidChange: function() {

		if (this.get('isWeb')) {
			this.set('isIos', false);
			this.set('isServer', false);
			this.set('component', 'Web');
		}

	}.observes('isWeb'),

	isServerDidChange: function() {

		if (this.get('isServer')) {
			this.set('isWeb', false);
			this.set('isIos', false);
			this.set('component', 'Server');
		}

	}.observes('isServer'),

	isP1: false, isP2: false, isP3: false, isP4:false, isP5:false,


	isP2DidChange: function() {
		if (this.get('isP2')) {
			this.set('isP1', false);
			this.set('isP3', false);
			this.set('isP4', false);
			this.set('isP5', false);
			this.set('priority', '2');
		}
	}.observes('isP2'),

	isP1DidChange: function() {
		if (this.get('isP1')) {
			this.set('isP2', false);
			this.set('isP3', false);
			this.set('isP4', false);
			this.set('isP5', false);
			this.set('priority', '1');
		}
	}.observes('isP1'),

	isP3DidChange: function() {
		if (this.get('isP3')) {
			this.set('isP2', false);
			this.set('isP1', false);
			this.set('isP4', false);
			this.set('isP5', false);
			this.set('priority', '3');
		}
	}.observes('isP3'),

	isP4DidChange: function() {
		if (this.get('isP4')) {
			this.set('isP2', false);
			this.set('isP3', false);
			this.set('isP1', false);
			this.set('isP5', false);
			this.set('priority', '4');
		}
	}.observes('isP4'),

	isP5DidChange: function() {
		if (this.get('isP5')) {
			this.set('isP2', false);
			this.set('isP3', false);
			this.set('isP4', false);
			this.set('isP1', false);
			this.set('priority', '5');
		}
	}.observes('isP5'),

	isAlways: false, isSometimes: false, isRarely: false, isDnt: false, isNA: false,

	isAlwaysDidChange: function() {
		if(this.get('isAlways')) {
			this.set('isSometimes', false);
			this.set('isRarely', false);
			this.set('isDnt', false);
			this.set('isNA', false);
			this.set('reproducible', 'Always');
		}
	}.observes('isAlways'),

	isSometimesDidChange: function() {
		if(this.get('isSometimes')) {
			this.set('isAlways', false);
			this.set('isRarely', false);
			this.set('isDnt', false);
			this.set('isNA', false);
			this.set('reproducible', 'Sometimes');
		}
	}.observes('isSometimes'),

	isRarelyDidChange: function() {
		if(this.get('isRarely')) {
			this.set('isSometimes', false);
			this.set('isAlways', false);
			this.set('isDnt', false);
			this.set('isNA', false);
			this.set('reproducible', 'Rarely');
		}
	}.observes('isRarely'),

	isDntDidChange: function() {
		if(this.get('isDnt')) {
			this.set('isSometimes', false);
			this.set('isRarely', false);
			this.set('isAlways', false);
			this.set('isNA', false);
			this.set('reproducible', 'Did Not Try');
		}
	}.observes('isDnt'),

	isNADidChange: function() {
		if(this.get('isNA')) {
			this.set('isSometimes', false);
			this.set('isRarely', false);
			this.set('isDnt', false);
			this.set('isAlways', false);
			this.set('reproducible', 'Not Applicable');
		}
	}.observes('isAlways'),


});