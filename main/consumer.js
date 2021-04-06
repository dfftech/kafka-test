const config = require("./config");
var kafka = require("kafka-node");
var client = new kafka.KafkaClient(config.KAFKA_HOST);

const Consumer = kafka.Consumer;
const consumer = new Consumer(client, [{ topic: "topic-1", partition: 0 }], {
  autoCommit: false,
});
consumer.on("message", function (message) {
  console.log("Consumer Message: ", message);
});
