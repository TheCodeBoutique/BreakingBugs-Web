// Breakingbugs.BugReportSubstate = Alto.State.extend({

//     enterState: function() {
//         Breakingbugs.bugDetailView = Breakingbugs.BugDetailView.create();
//     },

//     exitState: function() {
//         Alto.DomUtil.removeView('Breakingbugs.bugDetailView');
//     }

// });

Breakingbugs.DashboardState = Alto.State.extend ({

    enterState: function() {
        Breakingbugs.dashboardView = Breakingbugs.DashboardView.create();
        Breakingbugs.statechart.dispatchEvent('fetchBugReports');
        Breakingbugs.statechart.dispatchEvent('fetchAllUsers');

        // Breakingbugs.statechart.goToSubstate('mySubStateInstance')
    },

    fetchBugReports: function() {

        var container = CloudKit.getDefaultContainer();
        var publicDB = container.publicCloudDatabase;
        var dataStore = Breakingbugs.BugDatastore.create();
        var json = dataStore.serializeBugRecords(Breakingbugs.fetchBugsController.get('content'));
        var cookieValue = Alto.Cookie.find('discoverEmail');            // Value to filter query by user
        var userEmail = cookieValue.get('value');

        var query = {
            recordType: 'bugReport',
            filterBy: {
                comparator: 'EQUALS',
                fieldName: 'AssignedTo',
                fieldValue: {
                    value: userEmail
                }
            }
        };


        return publicDB.performQuery(query).then(function (response){
            var datastore = Breakingbugs.BugDatastore.create();

            datastore.serializeBugRecords(response.records);
        })
    },

    fetchAllBugReports: function() {

        var container = CloudKit.getDefaultContainer();
        var publicDB = container.publicCloudDatabase;
        var dataStore = Breakingbugs.BugDatastore.create();
        var json = dataStore.serializeBugRecords(Breakingbugs.fetchBugsController.get('content'));

        var query = {
            recordType: 'bugReport',
        };

        return publicDB.performQuery(query).then(function (response){
            var datastore = Breakingbugs.BugDatastore.create();

            datastore.serializeBugRecords(response.records);
        })
    },

    fetchAllUsers: function() {
        var container = CloudKit.getDefaultContainer();
        var publicDB = container.publicCloudDatabase;
        var dataStore = Breakingbugs.UsersDatastore.create();
        var json = dataStore.serializeUsersRecords(Breakingbugs.usersArrayController.get('content'));

        var query = {
            recordType: 'user',
        };

        return publicDB.performQuery(query).then(function (response){
            var datastore = Breakingbugs.UsersDatastore.create();

            datastore.serializeUsersRecords(response.records);
        })
    },

    displayAllUsers: function() {
        var userArray = Breakingbugs.usersArrayController.get('content');
        var emailArray = [];

        for(var i = 0; i<userArray.length; i++) {
            emailArray[i] = userArray[i].emailAddress;
        }

        return emailArray;
    },

    // fetchFeatureRequests: function() {
    //     var container = CloudKit.getDefaultContainer();
    //     var publicDB = container.publicCloudDatabase;
    //     var dataStore = Breakingbugs.FeatureDatastore.create();
    //     var json = dataStore.serializeFeatureRecords(Breakingbugs.fetchFeaturesController.get('content'));

    //     var query = {
    //       recordType: 'featureRequest'
    //     };


    //     return publicDB.performQuery(query).then(function (response){
    //         var datastore = Breakingbugs.FeatureDatastore.create();

    //             datastore.serializeFeatureRecords(response.records);
    //     })
    // },

    // mySubStateInstance: MySubStateClass.extend(),

    goToBugDetailState: function () {
        Breakingbugs.router.goToRoute('#/dashboard/:id');
    },

    goToNavigationState: function () {
        Breakingbugs.router.goToRoute('#/navigation');
    },

    exitState: function() {
        Alto.DomUtil.removeView('Breakingbugs.dashboardView');
    }

});