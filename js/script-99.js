function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
hotelGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail»."