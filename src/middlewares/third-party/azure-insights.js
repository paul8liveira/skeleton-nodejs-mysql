import config from 'config';
let appInsights = require('applicationinsights');

const samplingPercentage = config.get('INSIGHTS.SAMPLING_PERCENTAGE');
const role = config.get('INSIGHTS.ROLE');
const key = config.get('INSIGHTS.INSTRUMENTATION_KEY');
const disable = config.get('INSIGHTS.DISABLE');

appInsights.setup(key)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true, true)
    .setUseDiskRetryCaching(true);

appInsights.defaultClient.config.samplingPercentage = samplingPercentage;    
appInsights.defaultClient.context.tags[appInsights.defaultClient.context.keys.cloudRole] = role;
appInsights.defaultClient.config.disableAppInsights = disable;
appInsights.start();

const client = appInsights.defaultClient;

/*examplos
client.trackEvent({name: "my custom event", properties: {customProperty: "custom property value"}});
client.trackException({exception: new Error("handled exceptions can be logged with this method")});
client.trackMetric({name: "custom metric", value: 3});
client.trackTrace({message: "trace message"});
client.trackDependency({target:"http://dbname", name:"select customers proc", data:"SELECT * FROM Customers", duration:231, resultCode:0, success: true, dependencyTypeName: "ZSQL"});
client.trackRequest({name:"GET /customers", url:"http://myserver/customers", duration:309, resultCode:200, success:true});
*/
let trackEvent = (name, obj) => {
    client.trackEvent({ name: name, properties: obj });
};
let trackException = (obj) => {
    client.trackException({ exception: obj });
};
let trackMetric = (obj) => {
    client.trackMetric(obj);
};
let trackTrace = (obj) => {
    client.trackTrace(obj);
};
let trackDependency = (obj) => {
    client.trackDependency(obj);
};
let trackRequest = (obj) => {
    client.trackRequest(obj);
};

module.exports = {
    trackEvent: trackEvent,
    trackException: trackException,
    trackMetric: trackMetric,
    trackTrace: trackTrace,
    trackDependency: trackDependency,
    trackRequest: trackRequest
}