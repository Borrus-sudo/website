
- Support markdown syntax of our dreams
	- comark support
	- Telescopic text. This is pretty crucial and can have great use for us. Esp with LLMs, we can harness them more.
	- Better component support, inspired from nuxt/content
		- Inline components support esp paired with nuxt/icons
	- Better sound support. Allow for authors easily add sounds to various things.
	- T.O.C and footnotes support.
	- Easy tailwind support
	- Integration with the the vscode ext?
	- Math, mermaid and code highlighting. Add support to embed stackblitz?
	- Scroll component support
- Support tagging, searching, querying, time-travel capability and explorer view via a module
- Prebuilt components:

	- Command K bar {pre-built component} {template does deeper integration}
	- Historical trails {pre-built component} {template does deeper integration}
	- Link previews {pre-built component} {template does deeper integration}
		- For same site links, we generate the preview
		- For foreign sites, we generate their link preview
	- Andy mathuschak mode {pre-built component} {template does deeper integration}
	- Graph component/ Spatial space visualizer component {template does a deeper integration}
	- Sprite component {This does not need to be in a library format}
	- cursor component {This does not need to be in a library format too} {Mostly thin layer around pre-built libraries}
	- Background canvas support. {Would make stuff like creating a background easier}
	- Callout components (warning, info, message)
	- Telescopic text component, Engelbart components. (Maybe we can give some sort of hints?)
	- Scroll component support
	- Syntax higlighting support. [Prolly just a wrapper]
- Support Spatial software
	- Support Ambient co-presence. Inspired from _playhtml_ and _Maggie Appleton_ {template would do a deeper integration}
		- Cursor leaving a trail like humans foot-steps do. They are small foot-steps that disappear pretty fast.
		- Support good lighting change in background as they scroll more.
		- Support a Kandil that universally turns on and off
			- https://lightsvalley.in/product/buy-decorative-lamp-diwali-kandil-lamp-hanging-pack-of-2/
			- https://lightsvalley.in/product-category/paper-pinwheel-%e0%a4%95%e0%a4%be%e0%a4%97%e0%a4%9c-%e0%a4%95%e0%a5%80-%e0%a4%ab%e0%a4%bf%e0%a4%b0%e0%a4%95%e0%a5%80/

		- Figure out more such things!
		- Read the pattern language book to get more creative ideas from physical spaces.
		- Add sounds to various things!
		- Fire-cracker component
		- Automata theory component!!!

- Template
	- Utilize the primitives and put them in a template format
	- Add support for nuxt/seo, nuxt/font, nuxt/icons and nuxt/images modules
	- built-in theming support, layout support
	- Configure Vale {if required?}
	- Sprite and Cursor component
	- Create a github action that automatically displays.



## New notes

- Things learnt: engelbart's zoom, bulleted points, tips to remember whilst blogging.
- Writing is just converting a net into a line.
- We could have JIT essays with this which the users can share too.
- Henrik's point:
   > But the AI ​​generates a new text for each zoom, so what you experience is rather that the text changes hallucinogenically before your eyes – or maybe rather meanders to a mountainside where you get a better view of the landscape. From there, you see something in the far distance that interests you, and you start zooming... into another note, and through that note into another, and yet another ... all the while generating an essay optimized by prompt engineering to fit your needs and learning profile. And in the voice of whatever long-dead author you prefer.`

- Andrej Karpathy's LLM wiki.
- A system of inbox built on top of Keep Notes
- Memex:
	- memex was an machine for organizing information:
		- You could putting anything into the memex.
		- You could easily retrieve anything from memex. {Well indexing and selective access}
		- There is keyboard and level to access a book and navigate
		- Each source called upon creates a projection. It was possible to have multiple such projections together.
		- The power comes from trails {associative indexing}. You can stitch links across sources. Those could in essence become new books.
		- The trail could in essence become a new book that can be accessed upon via the keyboard and level mechanism. Bush goes to some lengths to exactly describe how the interface of such a machine would look like.
		- Trails can be as intricate as possible and shareable too!
		- If the machine learns how to think, it can create such trails for us from our sources too! [Henriks' point too]
		- Also shares that a third person could access an individual's memex, create new trails and share for living!

	- Surprisingly the modern web uptill now could do everything except the trails, how have not figured that out yet?

	- Bush also explains the technology advancements needed to build such a machine. Mainly he posited that they needed advancements on compression and selective access to make this possible. He explains the history of technology nicely. He bet heavy on magnetic tapes and figure that such a machine would be possible in due course of time once the costs to acquire magnetic tapes go down (the economics should support it).

- Karpathy's LLM wiki has 3 core components:
	- Sources.
	- LLM markdown files.
	- Log file and a index file.
	- It has 3 main functions:
		- Ingestion
		- Querying
		- Linting
	- Striking similarities to memex.

- I see mycelium being more like a [memex] complete llm wiki workflow like karpathy now.
	- There shall be a special stress upon *.md files, google notes mcp plugin, and it's linking in the Pi agent now.
	- The additional features of custom trails may-be fun to write?
	- Supermemory is cool, esp for contacting with my inbox
		- episodic stuff esp with spaced repetition?
		- having a pdf slicers. (I want API's that can find the guess where the necessary stuff is present and simply gimme those pagas)
	- I need to rethink this a whole lot more

- I can easily see ATProto replacing RSS feed.
- I want see if ATProto can help with Bush's dreams of user generated trails combined with henrik carlson's idea? Having a semantic search of your docs as vector embeddings made available can greatly help imo. Esp when aggregated across memexes!



## How to create a DB that is capable of semantic and syntatic storage is pretty cool imo

- SQLite should hold all my markdown files along w/ time travel and allow for syntax search it is gonna be pretty rad!
- SQLite should have a RAG by default to make it semantic searchable.
	- Article that are linked, should have their vectors naturally closer.
	- Time shuld be respected.
	- Along the time axis, is it possible for me see how my opinions changed?
	- Is it possible to lint contradictions or more like see possible contradictions?
	- Can Qwen3:8b work the best with this?
- This might be the closest we might have gotten to user generated trails.
- We have to incorporate the time aspect along with semantic and syntatic search.
- Try to think about markdown lint too
- Can we use markdown such that we can give hints. {Like the bulleted points can be used to give certain hints?}
- Put this stuff on the ATProtocol?
- True user generated memex trails can be made possible via aggregation is possible via such.
- Free offline first exp with this?
- Changelog generation can serve as a nice way to achieve the temporal feature
	- Change as an API.