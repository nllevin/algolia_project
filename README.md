# FriendFinder

[Live site](https://nllevin.github.io/algolia_project/)

## Inspiration

Lately I have been imagining a phone app that would interface with your contacts and help you to keep in touch with your friends, family, or professional contacts. When I saw the contacts data set, it struck me that it would be awesome to be able to search through your contacts based on location. That way, if you wanted to plan a road trip, you could easily locate friends along the way.

## Data

In order to make use of Algolia's GeoSearch functionality, the first thing that I needed to do was to add a \_geoloc field to the contact data. To do that, I made use of a [free geocoding API maintained by the US Census Bureau](https://geocoding.geo.census.gov/). Not all 500 of the addresses in the data set could be geocoded by the API, but I still ended up with 417 records with \_geoloc fields attached.

## Configuration

The searchable attributes include, in this order, first and last name, company, address, city, state, and zip. I also included the number of followers as a custom ranking attribute, partly just to try it out, but partly with the idea that there might be good business reasons to steer users toward other active users on the app. 

By default, FriendFinder will display contacts that are near your current location as determined by your IP address. However, I also made city and state to be searchable, faceted attributes. If you're traveling to Honolulu, you'll want to be sure to visit your friends there!

## User Interface

For this project, I employed Algolia's React InstantSearch library. With the widgets from the library, it was relatively simple to implement instant search, Google Maps with info-windows that pop up upon clicking a marker, and refinement lists that allow users to search by the faceted attributes of city and state and to see in advance how many results there will be for each category. 

By the time I answered the third hypothetical customer question about whether it requires a lot of development work to integrate Algolia into an existing website, I felt very comfortable saying that the answer was no, because Algolia provides so much functionality right out of the box.

## Attribution

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

