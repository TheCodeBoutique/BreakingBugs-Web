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

    createCookie: function(email, first, last) {
        Breakingbugs.emailCookie = Alto.Cookie.create({

            name: 'discoverEmail',
            domain: 'localhost',
            value: email,
            path: '/',
            expires: 365,
            // secure: ??

        });
        Breakingbugs.emailCookie.write();

        Breakingbugs.firstNameCookie = Alto.Cookie.create({

            name: 'discoverFirstName',
            domain: 'localhost',
            value: first,
            path: '/',
            expires: 365,
            // secure: ??

        });
        Breakingbugs.firstNameCookie.write();

        Breakingbugs.lastNameCookie = Alto.Cookie.create({

            name: 'discoverLastName',
            domain: 'localhost',
            value: last,
            path: '/',
            expires: 365,
            // secure: ??

        });
        Breakingbugs.lastNameCookie.write();
    },

    discoverUser: function () {

        var emailAddress = Breakingbugs.discoverUserController.get('email');
        var fName = Breakingbugs.discoverUserController.get('firstName');
        var lName = Breakingbugs.discoverUserController.get('lastName');

        Breakingbugs.discoverSubState.createCookie(Breakingbugs.discoverUserController.get('email'), Breakingbugs.discoverUserController.get('firstName'), Breakingbugs.discoverUserController.get('lastName'));

            Breakingbugs.statechart.dispatchEvent('removeDiscoverPane');
            Breakingbugs.statechart.leaveCurrentSubState();
            Breakingbugs.statechart.goToState('authenticationState');
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
        Breakingbugs.userController.set('content', Breakingbugs.UserRecord.create());
            // Get the container.
            var container = CloudKit.getDefaultContainer();

            function gotoAuthenticatedState(userInfo) {
                console.log(userInfo);

                var discoverEmailCookie = Alto.Cookie.find('discoverEmail');
                var discoverFirstNameCookie = Alto.Cookie.find('discoverFirstName');
                var discoverLastNameCookie = Alto.Cookie.find('discoverLastName');          //Find a way to check for the user record of currently logged in user to prevent creating duplicates

                //if(userInfo.emailAddress != undefined) {
                //    var checkForUser = Breakingbugs.authenticationState.fetchLoggedInUser();
                //    userInfo.isDiscoverable = true;
                //
                //    if (userInfo.emailAddress == undefined) {
                //        userInfo.emailAddress = checkForUser.fields.emailAddress;
                //    }
                //
                //    if (userInfo.firstName == undefined) {
                //        userInfo.firstName = checkForUser.fields.firstName;
                //    }
                //
                //    if (userInfo.lastName == undefined) {
                //        userInfo.lastName = checkForUser.fields.lastName;
                //    }
                //
                //    var userEmail = checkForUser.fields.emailAddress;
                //    var userFirst = checkForUser.fields.firstName;
                //    var userLast = checkForUser.fields.lastName;
                //
                //    Breakingbugs.statechart.dispatchEvent('createCookie', userEmail, userFirst, userLast);
                //
                //    console.log(userInfo);
                //    document.getElementById("displayed-username").innerHTML = 'Welcome, ' + userInfo.emailAddress;
                //
                //    Breakingbugs.router.goToRoute('#/navigation');
                //}
                if (discoverEmailCookie && discoverFirstNameCookie && discoverLastNameCookie && userInfo.emailAddress == undefined) {
                    var emailValue = discoverEmailCookie.get('value');
                    var fNameValue = discoverFirstNameCookie.get('value');
                    var lNameValue = discoverLastNameCookie.get('value');
                    userInfo.isDiscoverable = true;

                    if(userInfo.emailAddress == undefined) {
                        userInfo.emailAddress = emailValue;
                    }
                    if(userInfo.firstName == undefined) {
                        userInfo.firstName = fNameValue;
                    }
                    if(userInfo.lastName == undefined) {
                        userInfo.lastName = lNameValue;
                    }

                    var userEmail = userInfo.emailAddress;
                    var userFirst = userInfo.firstName;
                    var userLast = userInfo.lastName;

                    Breakingbugs.statechart.dispatchEvent('createNewUser', userEmail, userFirst, userLast);

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

    createNewUser: function(email, first, last) {

        Breakingbugs.userController.set('email', email);
        Breakingbugs.userController.set('firstName', first);
        Breakingbugs.userController.set('lastName', last);
        Breakingbugs.userController.set('role', 'employee');

        var container = CloudKit.getDefaultContainer(),
            publicDB = container.publicCloudDatabase,
            dataStore = Breakingbugs.UsersDatastore.create(),
            json = dataStore.deserializeUsersRecords(Breakingbugs.userController.get('content'));

        return publicDB.saveRecord(json).then(function(response) {
            console.log(json);
        });
    },

    createCookie: function(email, first, last) {
        Breakingbugs.emailCookie = Alto.Cookie.create({

            name: 'discoverEmail',
            domain: 'localhost',
            value: email,
            path: '/',
            expires: 365,
            // secure: ??

        });
        Breakingbugs.emailCookie.write();

        Breakingbugs.firstNameCookie = Alto.Cookie.create({

            name: 'discoverFirstName',
            domain: 'localhost',
            value: first,
            path: '/',
            expires: 365,
            // secure: ??

        });
        Breakingbugs.firstNameCookie.write();

        Breakingbugs.lastNameCookie = Alto.Cookie.create({

            name: 'discoverLastName',
            domain: 'localhost',
            value: last,
            path: '/',
            expires: 365,
            // secure: ??

        });
        Breakingbugs.lastNameCookie.write();
    },

    fetchLoggedInUser: function() {
        var container = CloudKit.getDefaultContainer();
        var publicDB = container.publicCloudDatabase;
        var dataStore = Breakingbugs.UsersDatastore.create();
        var json = dataStore.serializeUsersRecords(Breakingbugs.usersArrayController.get('content'));
        var emailCookie = Alto.Cookie.find('discoverEmail');
        var emailValue = emailCookie ? emailCookie.get('value') : '';

        var query = {
            recordType: 'user',
            filterBy: {
                comparator: 'EQUALS',
                fieldName: 'emailAddress',
                fieldValue: {
                    value: emailValue
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