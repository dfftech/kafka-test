var config = require("./config");
var kafka = require("kafka-node");
var client = new kafka.KafkaClient(config.KAFKA_HOST);
console.log(config.KAFKA_HOST);
var topicsToCreate = [
  {
    topic: "topic-1",
    partitions: 1,
    replicationFactor: 1,
  },
];

client.createTopics(topicsToCreate, (error, result) => {
  console.error("Error: ", error);
  console.log("Result: ", result);
});
