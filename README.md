# The Lorem Ipsum Blog

## A Headless WordPress Site Built with Node, GraphQl, and EJS

I'll admit it - I've become a bit obsessed with headless WordPress. The ubiquitous content management system (CMS) that I work in every day as a digital marketer is in the midst of a head-on collision with the latest frontend technologies to combine the best of all worlds for marketers, developers, and the end user.

I've built headless WP sites with Gatsby before, but the layers of abstraction can cause us to feel disconnected with the underlying processes that we are developing on top of, and as someone who learned JS after React took over the world, I skipped over some of the steps that got us here. I wanted to go back and understand these steps.

## Why WordPress?

WP is accessible. It's free, open source, and one-click installation comes included with several affordable hosting plans. With a few hours to spare and YouTube, any tech-savvy person can get a half-decent site up and running and can share their ideas, work, and products with the rest of the world.

WP is high quality. WordPress is the CMS of the masses. It has been developed by a global community of developers and marketers to create the system that makes it possible for real people to efficiently produce real content on a real live website and share it with real people in real time. You can't argue with the power of that concept, and WordPress sees it put into action every day.

## Why a Templating Language Makes Sense

WordPress gives users an interface to store and access content organized in a SQL database, and it manages the data to inject the correct data into PHP templates, rendering the final HTML and sending it to the user. This is very similar to how we build websites with MVC frameworks in JS, and in using WordPress headlessly we are essentially removing the PHP template step from the WP hosting server, taking only the data from WP, and rendering the HTML somewhere else. With Gatsby this is on the server at build time; with our solution we are going to do server-side rendering in real time.

## Why GraphQl with WordPress

WordPress uses SQL, and out of the box it already exposes an API endpoint that we can use to query the data and recieve JSON back. While this did allow people to imagine a world in which headless WordPress was the future, there are limitations with the API that have caused frustrations. In answer to this problem, WPEngine has been funding WPGraphQl, an open-source project that consists of WordPress plugins that allow us to expose, manage, and access WordPress data with GraphQl.
