Breakingbugs.DiscoverSubState = Alto.State.extend(Breakingbugs.discoverPaneDelegate, {

        enterState: function () {
            //if() {
            //    Breakingbugs.router.goToRoute('index.html');
            //    Breakingbugs.statechart.dispatchEvent('removeDiscoverPane');
            //    Breakingbugs.statechart.leaveCurrentSubState();
            //} else {
                Breakingbugs.statechart.dispatchEvent('displayDiscoverPane');
                Breakingbugs.discoverUserController.set('content', Breakingbugs.DiscoverUserRecord.create());
            //}
        },

        discoverUser: function () {

            var emailAddress = Breakingbugs.discoverUserController.get('email');
            var fName = Breakingbugs.discoverUserController.get('firstName');
            var lName = Breakingbugs.discoverUserController.get('lastName');

            createCookie();

            function createCookie() {

                Breakingbugs.emailCookie = Alto.Cookie.create({

                    name: 'discoverEmail',
                    domain: 'localhost',
                    value: emailAddress,
                    path: '/',
                    expires: 365,
                    // secure: ??

                });
                Breakingbugs.emailCookie.write();

                Breakingbugs.firstNameCookie = Alto.Cookie.create({

                    name: 'discoverFirstName',
                    domain: 'localhost',
                    value: fName,
                    path: '/',
                    expires: 365,
                    // secure: ??

                });
                Breakingbugs.firstNameCookie.write();

                Breakingbugs.lastNameCookie = Alto.Cookie.create({

                    name: 'discoverLastName',
                    domain: 'localhost',
                    value: lName,
                    path: '/',
                    expires: 365,
                    // secure: ??

                });
                Breakingbugs.lastNameCookie.write();

                Breakingbugs.statechart.dispatchEvent('removeDiscoverPane');
                Breakingbugs.statechart.leaveCurrentSubState();
                Breakingbugs.statechart.goToState('authenticationState');
            };
        },

    cancel: function() {
        Breakingbugs.discoverUserController.set('content', {});
        Breakingbugs.statechart.dispatchEvent('removeDiscoverPane');
        Breakingbugs.statechart.leaveCurrentSubState();
    },

    exitState: function () {
        Breakingbugs.statechart.dispatchEvent('removeDiscoverPane');
    }

}),

Breakingbugs.AuthenticationState = Alto.State.extend ({

	enterState: function() {
            // Get the container.
            var container = CloudKit.getDefaultContainer();

            function gotoAuthenticatedState(userInfo) {

                var discoverEmailCookie = Alto.Cookie.find('discoverEmail');
                var discoverFirstNameCookie = Alto.Cookie.find('discoverFirstName');
                var discoverLastNameCookie = Alto.Cookie.find('discoverLastName');
                //var checkForUser = fetchLoggedInUser();

                if (discoverEmailCookie) {
                    var emailValue = discoverEmailCookie.get('value');
                    var fNameValue = discoverFirstNameCookie.get('value');
                    var lNameValue = discoverLastNameCookie.get('value');

                    if(userInfo.emailAddress = undefined) {
                        userInfo.emailAddress = emailValue;
                    }
                    if(userInfo.firstName = undefined) {
                        userInfo.firstName = fNameValue;
                    }
                    if(userInfo.lastName = undefined) {
                        userInfo.lastName = lNameValue;
                    }

                    console.log(userInfo);
                    document.getElementById("displayed-username").innerHTML = 'Welcome, ' + userInfo.emailAddress;

                    Breakingbugs.router.goToRoute('#/navigation');
                    // console.log(userInfo.firstName + ' ' + userInfo.lastName);
                    // document.getElementById("displayed-username").innerHTML = 'Welcome, ' + userInfo.firstName + ' ' + userInfo.lastName;
                } else {
                    Breakingbugs.statechart.dispatchEvent('goToDiscoverSubState');
                    console.log('User record name: ' + userInfo.userRecordName);
                }

                container
                    .whenUserSignsOut()
                    .then(gotoUnauthenticatedState);
            }

            function gotoUnauthenticatedState(error) {

                if(error && error.ckErrorCode === 'AUTH_PERSIST_ERROR') {
                    showDialogForPersistError();
                }

                console.log('Unauthenticated User');

                container
                    .whenUserSignsIn()
                    .then(gotoAuthenticatedState)
                    .catch(gotoUnauthenticatedState);
            }

            // Check a user is signed in and render the appropriate button.
            return container.setUpAuth()
                .then(function (userInfo) {

                    // Either a sign-in or a sign-out button was added to the DOM and form buttons are enabled or disabled depending on authentication status.
                    container.whenUserSignsIn().then(function (userInfo) {

                    });

                    container.whenUserSignsOut().then(function () {             // delete all cookies

                        var discoverEmail = Alto.Cookie.find('discoverEmail');
                        var discoverFirstName = Alto.Cookie.find('discoverFirstName');
                        var discoverLastName = Alto.Cookie.find('discoverLastName');

                        if(discoverEmail) {
                            var emailValue = discoverEmail.get('value');

                            Breakingbugs.emailCookie = Alto.Cookie.create({

                                name: 'discoverEmail',
                                domain: 'localhost',
                                value: emailValue,
                                path: '/',
                                expires: -365
                                // secure: ??

                            });
                            Breakingbugs.emailCookie.write();

                        }

                        if (discoverFirstName) {
                            var fNameValue = discoverFirstName.get('value');

                            Breakingbugs.firstNameCookie = Alto.Cookie.create({

                                name: 'discoverFirstName',
                                domain: 'localhost',
                                value: fNameValue,
                                path: '/',
                                expires: -365,
                                // secure: ??

                            });
                            Breakingbugs.firstNameCookie.write();
                        }

                        if (discoverLastName) {
                            var lNameValue = discoverLastName.get('value');

                            Breakingbugs.lastNameCookie = Alto.Cookie.create({

                                name: 'discoverLastName',
                                domain: 'localhost',
                                value: lNameValue,
                                path: '/',
                                expires: -365,
                                // secure: ??

                            });
                            Breakingbugs.lastNameCookie.write();
                        }

                        window.location.reload('index.html');
                    });

                    // userInfo is the signed-in user or null.
                    if (userInfo) {
                        gotoAuthenticatedState(userInfo);
                    } else {
                        gotoUnauthenticatedState();
                    }
                }, function (error) {
                    console.log(error);
                });
	},

    discoverSubState: Breakingbugs.DiscoverSubState.extend(),

    goToDiscoverSubState: function() {
        Breakingbugs.statechart.goToSubState('discoverSubState');
    },

    createNewUser: function() {
        var discoverEmail = Alto.Cookie.find('discoverEmail');
        var discoverFirstName = Alto.Cookie.find('discoverFirstName');
        var discoverLastName = Alto.Cookie.find('discoverLastName');

        var container = CloudKit.getDefaultContainer(),
            publicDB = container.publicCloudDatabase,
            dataStore = Breakingbugs.UsersDatastoreDatastore.create(),
            json = dataStore.deserializeUsersRecords(Breakingbugs.discoverUserController.get('content'));

        publicDB.saveRecord(json).then(function(response) {

        });
    },

    fetchAllUsers: function() {
        var container = CloudKit.getDefaultContainer();
        var publicDB = container.publicCloudDatabase;
        var dataStore = Breakingbugs.UsersDatastore.create();
        var json = dataStore.serializeUsersRecords(Breakingbugs.userController.get('content'));

        var query = {
            recordType: 'user',
        };

        return publicDB.performQuery(query).then(function (response){
            var datastore = Breakingbugs.UsersDatastore.create();

            datastore.serializeUsersRecords(response.records);
        })
    },

    fetchLoggedInUser: function() {
        var container = CloudKit.getDefaultContainer();
        var publicDB = container.publicCloudDatabase;
        var dataStore = Breakingbugs.UsersDatastore.create();
        var json = dataStore.serializeUsersRecords(Breakingbugs.userController.get('content'));
        var emailCookie = Alto.Cookie.find('discoverEmail');
        var emailValue = emailCookie ? emailCookie.get('value') : '';

        var query = {
            recordType: 'user',
            filterBy: {
                comparator: 'EQUALS',
                fieldName: 'emailAddress',
                fieldValue: {
                    value: emailValue,
                }
            }
        };

        return publicDB.performQuery(query).then(function (response) {
            var datastore = Breakingbugs.UsersDatastore.create();

            datastore.serializeUsersRecords(response.records);
        })
    },

    exitState: function() {

    }

});