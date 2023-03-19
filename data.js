module.exports = {
  receiver: "webhook",
  status: "firing",
  alerts: [
    {
      status: "firing",
      labels: { alertname: "test" },
      annotations: { description: "description", summary: "summary" },
      startsAt: "2023-03-19T02:44:55.997Z",
      endsAt: "0001-01-01T00:00:00Z",
      generatorURL: "",
      fingerprint: "1f56cb8f931d1bd4",
    },
  ],
  groupLabels: { alertname: "test" },
  commonLabels: { alertname: "test" },
  commonAnnotations: { description: "description", summary: "summary" },
  externalURL: "http://ip-172-31-37-142.ap-northeast-2.compute.internal:9093",
  version: "4",
  groupKey: '{}:{alertname="test"}',
  truncatedAlerts: 0,
};
