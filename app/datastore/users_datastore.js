Breakingbugs.UsersDatastore = Alto.Object.extend({

    deserializeUsersRecords: function (record) {
        var userRecord = {
            recordName: record.get('emailAddress'),

            recordType: 'Users',

            fields: {
                emailAddress: {
                    value: record.get('emailAddress')
                },
                firstName: {
                    value: record.get('firstName')
                },
                lastName: {
                    value: record.get('lastName')
                },
                role: {
                    value: record.get('role')
                }
            }

        }

        return userRecord;


    },

    serializeUsersRecords: function (response) {

        var records = [],
            obj;

        response.forEach(function (hash) {
            if (Alto.isPresent(hash.fields)) {
                obj = {
                    recordName: hash.recordName ? hash.recordName.value : '',
                    emailAddress: hash.fields.emailAddress ? hash.fields.emailAddress.value : '',
                    firstName: hash.fields.firstName ? hash.fields.firstName.value : '',
                    lastName: hash.fields.lastName ? hash.fields.lastName : '',
                    role: hash.fields.role ? hash.fields.role : ''
                }

                records.addObject(Breakingbugs.UserRecord.create(obj));
            }

        });

        Breakingbugs.userController.set('content', records);
    },


});
