#future #article #idea 
Source: [link](https://www.inkandswitch.com/essay/malleable-software/)

The primary goals of malleable programming is to give agency back to the end-users. It's philosophy is to fulfill the long lost prophecy of viewing the computational substrate as a clay, the one that can be molded to fit the user's needs.  

Our current tools are super siloed and fairly difficult to customize due to need for programming. See Andy Matushack's [Apps and Programming: Two accidental tyrannies](https://youtu.be/ycyCGCtScdc?si=ITQ9IdNYd4Nod9s3)

This post draws up 3 solutions to do the same: 

- **A gentle slop from user to creator**. 
	- Most of the customizations possible today are via Settings, Plugins, Mods or creating a fork if it is a OSS project.
	- Each of them get progressively get more expressive in their "tailor power" but also require more skill for tailoring. 
	- Instead of having step wise jumps, the authors propose to have a more smoother slope for the curve of skill vs tailor-power. 
	- There should be steady mechanism to perform customizations so that the least amount of skill is required for performing any customization. 
	- Full blown programming must only be resorted to in the worse case. 
	- Also take a look at [End User Programming](https://www.inkandswitch.com/end-user-programming)
	- Coding Agents will definitely help tons here. 
- Tools, not Apps
	- Most of our apps are siloed. Our current computing ecosystem is filled with a bunch of siloes with no real way to allow for true interoperability. 
	- Every app is good at performing one specific task, but there is no way to use a bunch of them seamlessly together. 
	- The vision is to make computing more like a wood workshop, where apps compose together naturally just like the physical environment. 
	- Just like an experienced chef builds the kitchen to their preference filled with tools they prefer, ingredients they want and a space where they can just use everything to create a wonderful dish. 
	- If we want to make computing more malleable like the physical environment, we require apps to be able to communicate with each other.
	- Currently creative work that spans multiple apps is filled with friction points, requiring the user to frequently copy the data manually, move windows together, find alternatives of apps just so that they are compatible with others. 
	- The two requirements to solve this are: 
		- Sharing data between tools
			- One way to achieve this is via the [[File over app]] philosophy.
			- UNIX command line has shown that how using standardized data formats stored in a file can afford composability naturally. 
			- The user also maintains ownership and agency over the underlying data. Something that the Atmosphere resonates with.
			- Shared collaboration over data can also be done with dedicated version controlling. 
		- Composing User Interface
			- You also need a space like the kitchen platform, where these apps function in harmony. 
			- UNIX command line implemented this with the `|` (pipe) symbol.
			- [Dynamicland](https://dynamicland.org/) does this by bring computing in the physical spaces.
			- The article also talks about systems like OpenDoc and OLE
			- We might need a new OS that does just this. [Telepath](https://telepath.computer/) seems to be doing some cool work in this direction!
		
- Communal Creation:
	- There should exist a marketplace to share uniquely crafted apps/plugins/configurations with each other.
	- The advent of coding agents is making [home cooked software](https://youtu.be/qo5m92-9_QI?si=REw0mIQ01GYl3ALf) more and more abundant. Instead of using industrialized pieces of software that are aimed at the needs of majority of the users, [[Barefoot developer|barefoot developers]] can cook a home cooked piece of software for their specific local contexts. Such pieces of "situated software" should have an easy way to be shared with their small communities. I draw weak comparisons to such a marketplace with [The Internet is Tokyo](https://intersectionalthinking.substack.com/p/the-internet-is-tokyo). ==TODO improve the last line==
	- Marketplaces exist on a per-app basis to share plugins for that app, like the Obsidian and VSCode marketplace. A universal solution built for small scale tools-not-apps is missing. Web-apps don't quite us get there because of the lack of ability of the web browser to allow for different web-apps to interoperate. Web technologies would certainly play a major role though!

- The post has made me realize that we need an OS built around the paradigm of malleable computing. The OS will serve as a kitchen space with well defined protocols to allow for tools-like-apps to interoperate. A community marketplace to easily share such apps. Coding agents built-in so users can easily vibe-code a tool in case they need one. LLMs can certainly play a role here. There should exist more natural ways to have a communication with the OS interface. Such an OS will obviously be built on top of Linux kernel. UNIX had achieved a fair ton of these ideas in the CLI world, we need to bring the GUI equivalent yet!
- UNIX equivalence proof:
	- Do one thing but do it well <==> Tools-not-Apps
	- Composing various small programs via the PIPE operator which communicate with one another using a text based interface
	- They pioneered the "Everything is a file app"
- We need something like this for the GUI world!