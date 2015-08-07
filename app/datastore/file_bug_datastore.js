Breakingbugs.BugDatastore = Alto.Object.extend({

    deserializeBugRecords: function (record) {
        var bugRecord = {

            // recordName: ,

            // zoneID: _defaultZone,

            recordType: 'bugReport',

            fields: {
        	    Title: {
                    value: record.get('title')
                },
        	    Description: {
                    value: record.get('description')
                },
        	    Project: {
                    value: record.get('project')
                },
        	    Reproducible: {
                    value: record.get('reproducible')
                },
        	    StepsToReproduce: {
                    value: record.get('stepsToReproduce')
                },
        	    Priority: {
                    value: record.get('priority')
                },
                Component: {
                    value: record.get('component')
                },
                Status: {
                    value: 'Open'
                },
                AssignedTo: {
                    value: ''
                },
        	    Milestone: {
                    value: record.get('milestone')
                },
                OS: {
                    value: record.get('os')
                },
                Browser: {
                    value: record.get('browser')
                },
                ExpectedResults: {
                    value: record.get('results')
                },

            }

        }

            return bugRecord;


    },

    serializeBugRecords: function (response) {

        var records = [],
            obj;

        response.forEach(function (hash) {
            if (Alto.isPresent(hash.fields)) {
                obj = {
                    title: hash.fields.Title ? hash.fields.Title.value : '',
                    description: hash.fields.Description ? hash.fields.Description.value : '',
                    project: hash.fields.Project ? hash.fields.Project.value : '',
                    component: hash.fields.Component ? hash.fields.Component.value : '',
                    reproducible: hash.fields.Reproducible ? hash.fields.Reproducible.value : '',
                    stepsToReproduce: hash.fields.StepsToReproduce ? hash.fields.StepsToReproduce.value : '',
                    priority: hash.fields.Priority ? hash.fields.Priority.value : '',
                    milestone: hash.fields.Milestone ? hash.fields.Milestone.value : '',
                    results: hash.fields.ExpectedResults ? hash.fields.ExpectedResults.value : '',
                    status: hash.fields.Status ? hash.fields.Status.value: '',
                    assignedTo: hash.fields.AssignedTo ? hash.fields.AssignedTo.value : '',
                    os: hash.fields.OS ? hash.fields.OS.value : '',
                    osVersion: hash.fields.OsVersion ? hash.fields.OsVersion.value : '',
                    browser: hash.fields.Browser ? hash.fields.Browser.value : '',
                    browserVersion: hash.fields.BrowserVersion ? hash.fields.BrowserVersion.value : '',
                    actualResults: hash.fields.ActualResults ? hash.fields.ActualResults.value : '',
                    classification: hash.fields.Classification ? hash.fields.Classification.value : ''

                }

                records.addObject(Breakingbugs.FileBugRecord.create(obj));
            }

        });

        Breakingbugs.fetchBugsController.set('content', records);
    },


});