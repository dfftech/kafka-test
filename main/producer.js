var config = require("./config");
var kafka = require("kafka-node");
var client = new kafka.KafkaClient(config.KAFKA_HOST);

let Producer = kafka.Producer;
let KeyedMessage = kafka.KeyedMessage;
const producer = new Producer(client);
let count = 0;

producer.on("ready", () => {
  setInterval(() => {
    producer.send(
      [{ topic: "topic-1", messages: "hi count: " + count, partition: 0 }],
      (err, data) => {
        console.log("producer data", data);
      }
    );
    count++;
  }, 5000);
});

producer.on("error", (err) => {
  console.error("producer error: ", err);
});
