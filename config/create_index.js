const algoliasearch = require("algoliasearch");
const { ADMIN_KEY } = require("./keys.js");

const client = algoliasearch("5UDDVDO0RB", ADMIN_KEY);
const index = client.initIndex("geoloc_contacts");
const contactsJSON = require("./geoloc_contact_data.json");

index.addObjects(contactsJSON, (err, content) => {
  if (err) console.log(err);
});
