Breakingbugs.FileBugState = Alto.State.extend({

    enterState: function () {
        Breakingbugs.fileBugView = Breakingbugs.FileBugView.create();
        Breakingbugs.fileBugController.set('content', Breakingbugs.FileBugRecord.create());
    },

    goToNavigationState: function () {
        Breakingbugs.router.goToRoute('#/navigation');
    },

    saveBugReport: function() {
        var container = CloudKit.getDefaultContainer(),
            publicDB = container.publicCloudDatabase,
            dataStore = Breakingbugs.BugDatastore.create(),
            json = dataStore.deserializeBugRecords(Breakingbugs.fileBugController.get('content'));
   
          publicDB.saveRecord(json).then(function(response) {
        
          });
          
    },

    // fetchBugReports: function() {

    //     var container = CloudKit.getDefaultContainer();
    //     var privateDB = container.privateCloudDatabase;

    //     return privateDB.fetchRecord({
    //         recordName: recordName,
    //         // zoneID: zoneName
    //     }).then(function(response) {

    //     if(response.hasErrors) {

    //         // Handle the errors in your app.
    //         throw response.errors[0];
    //     } else {
    //         var record = response.records[0];
    //         var fields = record.fields;
    //         var name = fields['name'];
    //         var location = fields['location'];
    //         var asset = fields['asset'];

    //         // Render the fetched record.
    //         return renderRecord(
    //         record.recordName,
    //         record.recordType,
    //         record.recordChangeTag,
    //         record.created,
    //         record.modified,
    //         name ? name.value : '',
    //         location ? location.value : '',
    //         asset ? asset.value.downloadURL : null
    //         );
    //       }
    //     });
    // },

    exitState: function () {
        Alto.DomUtil.removeView('Breakingbugs.fileBugView');
    }

});