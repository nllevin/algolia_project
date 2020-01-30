# Question 1

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

  * Records
  * Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

# Answer 1

Hi George,

These are great questions that will definitely help you to get started, so thanks for reaching out.

Records and indices are distinct but closely related concepts. Each record represents a single item that could show up in search results, like the movie The Matrix, for example. Records, in turn, are composed of attributes, which are key/value pairs. In this case, the record for The Matrix might include its genre and year of production. When getting started with Algolia, the first task on your end is to convert your data into Records and Attributes.

An index is a collection of records and the data source for all of your searches. Your second task when getting starting is to send your records to an Algolia index using of of Algolia's API Clients or the Dashboard.

As for custom ranking, that's another excellent question. You can think of an Algolia search as having two stages: first, the engine finds records that match a user's query; then, the engine ranks the records so that the best-matched results appear at the top of the list. There are default ranking criteria for relevance, but custom ranking is your opportunity to adapt Algolia to your business. Perhaps you want your customers to see your most popular items based on metrics like sales, views, likes, or ratings; or perhaps you want your users to see your newest merchandise first. The sky's the limit here, so it really does depend on your specific goals.

I hope these answers are clarifying, but please feel free to be in touch if you have further questions. In addition, here are some resources that you may find helpful:

  * [Records and indexing](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#fetching-and-reworking-your-data-for-algolia)
  * [Custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#custom-ranking)

Finally, I'm always happy to schedule a time to speak by phone if that works better for you. Thanks for being a valued customer with Algolia!

Best,
Noah

# Question #2

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

# Answer #2

Hi Matt,

Thanks for reaching out! I'm sorry to hear that you're unhappy with the new dashboard design, but I'm always happy to receive your feedback and to see what I can do to help.

If you're the kind of developer who avoids the mouse as much as possible, you may prefer to use one of our [API clients](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/ecosystem/#api-clients) designed for the most common programming languages and platforms. You can use the API client to do everything that you can do in the Dashboard and more, with greater control.

I hope that the API client will better serve your needs, but please feel free to be in touch if you have any further questions or concerns.

Best,
Noah

# Question 3

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

# Answer 3

Hi Leo,

Thanks so much for your interest in Algolia! 

The answer to your question is no, integrating Algolia into your website does not require a lot of development work on your part. Algolia's Dashboard makes it simple to get your search up and running quickly, and the InstantSearch library provides an extensive set of widgets to power your search and build a state-of-the-art instant-search experience. Then, if you want to tweak things later, Algolia is highly customizable and offers API clients designed for the most common programming languages and platforms; these clients match and extend the Dashboard's functionality.

At a high level, the process of integrating Algolia can be broken into three steps:

  * index your data with us
  * configure any necessary relevance or ranking settings
  * build a search user interface

The first two steps can be accomplished using either the Dashboard or an API client, and the third step may be simplified by incorporating widgets from one of our InstantSearch libraries available for vanilla JavaScript, React, Vue, Angular, iOS, or Android.

You may also find it illuminating to check out this cool [interactive tutorial](https://www.algolia.com/doc/onboarding/#/pick-dataset), which showcases the ease of getting started with Algolia and the range of its applications. At the same time, please feel free to write back to me if you have further questions, or we can schedule a time to speak by phone.

Best,
Noah