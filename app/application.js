Breakingbugs = Alto.Application.createWithMixins(Alto.KeyResponderMixin, {

    NAMESPACE: 'Breakingbugs',

    VERSION: '0.0.1',

    Environment: 'staging',

    LogStateTransitions: null,

    LogMessages: null,

    CookieDomain: null,

    applicationWillLoad: function () {
        this._super();
        this.configureEnvironment();
    },

    applicationDidLoad: function () {

    },

    configureEnvironment: function () {
        if (this.get('Environment') === 'production') {
            this.set('LogStateTransitions', false);
            this.set('LogMessages', false);
            this.set('CookieDomain', 'INSERT_PRODUCTION_DOMAIN_HERE');
        } else {
            this.set('LogStateTransitions', true);
            this.set('LogMessages', true);
            this.set('CookieDomain', 'localhost');
        }
    }

});