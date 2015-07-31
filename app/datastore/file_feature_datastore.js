Breakingbugs.FeatureDatastore = Alto.Object.extend({

    deserializeFeatureRecords: function (record) {
        var featureRecord = {

            // recordName: 'bug',

            // zoneID: _defaultZone,

            recordType: 'featureRequest',

            fields: {
        	    Product: {
                    value: record.get('project')
                },
        	    Who: {
                    value: record.get('who')
                },
        	    What: {
                    value: record.get('what')
                },
        	    Why: {
                    value: record.get('why')
                }
            }

        }

        return featureRecord;

    },

    serializeFeatureRecords: function (record) {
        var records = [],
            obj;

        response.forEach(function (hash) {
            if (Alto.isPresent(hash.fields)) {
                obj = {
                    project: hash.fields.Product ? hash.fields.Product.value : '',
                    who: hash.fields.Who ? hash.fields.Who.value : '',
                    what: hash.fields.What ? hash.fields.What.value : '',
                    why: hash.fields.Why ? hash.fields.Why.value : '',     
                }

                records.addObject(Breakingbugs.FeatureRequestRecord.create(obj));
            }

        });

        Breakingbugs.fetchFeaturesController.set('content', records);
    },

});