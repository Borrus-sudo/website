https://worrydream.com/MagicInk/

### Summary

- Software programs is like a magical spell that a sorcerer incants which results in an enchantment, which can't be seen, which can't be heard, which isn't composed of matter, but it is very much real. (Similar to Structure and Interpretation of LISP program)
- There are two three main kinds of software:
	- Information Software
	- Manipulation Software
	- Communication Software
- Information Software is when the user creates and manipulates a model internal to them
- Manipulation software is when the user creates and manipulates a model external to them
- Communication software is essentially both. Read: http://shirky.com/essays/social-software-and-the-politics-of-groups/
- Graphic Design: Representing information visually
- Industrial design: using mechanical affordances to help users to use physical devices easily. Affordances are the visual and structural cues that immediately tell the user how to interact with the object or interface without needing instructions. Similar to [Vow of Silence](https://youtu.be/xrDZ--AuiL8?si=bt0UWyX37BxqgWAn) 
- Manipulation software is incredible tough cause we need to nail this interaction with just the limited abilities that the mouse and keyboard offers to us. Link to Spatial Computing. We also require an excellent graphic loop for the user to observe what results did the manipulation perform. "Doing with Images makes Symbols" is more applicable here. So are game design concepts. 
- Information software is the opposite. In information software, the user is trying to learn. They are constructing an internal mental model and manipulating it internally. Hence for interfaces that are information heavy, they need to be less interactive. The user isn't going to adjust their mental model based on the interface.
	- Information software needs to visually provide the data a person needs, allow them to make decisions, allow them to visualize possibilities. 
	 > Consider personal finance software. Entering and classifying my expenses is, again, tedious and unnecessary manipulation—my credit card already tracks these details. I use the software to understand my financial situation and my spending habits. How much of my paycheck goes to rent? How much to Burrito Shack?  If I give up extra guacamole on my daily burrito, will I be able to buy a new laptop? What is my pattern of Christmas spending, and will I have to cut back if I don’t take any jobs for a month? If I buy a hybrid car, how much will I save on gas? I want to ask and answer questions, compare my options, and let it guide my spending decisions.
	  
	- Information software design should primarily be approached as a graphic design project. 
		- It must have all properties that ink and paper has. 
			- Showing the data (what data)
			- Arranging the data well to encourage spatial reasoning to infer relationships. (where)
		- Computer is far more powerful than the static ink and paper model. Solution: **Context Sensitive Graphic Information** 
	- Context Sensitive Graphic Information:
		- Infer the context in which data is needed
			- Context can be inferred from: 
				- Environment
				- History
				- Interaction. (should be minimized)
		- Winnow the data to exclude the irrelevant
		- Generate a graphic which directly represents the needs and encourages exploration
- The reason interaction should be avoided because the user is creating and manipulating a model that is internal to itself. It does not think of the interface like a machine. It just views it as means to see the necessary information. When the user is forced to interact, the software assumes the form of manipulation software. The external model, manipulated through navigation, is the software’s model of the context. However, unlike genuine manipulation software, the user does not care about this model—it is merely a means to the end of seeing relevant information. 
	- The only interaction that a information heavy website might need is navigation. The user might need to navigate the data space. 
	- To solve this there are three techniques: 
		1) Graphical Manipulation
		2) Relative Navigation
		3) Tight feedback loops
		- Explanation:
			- Graphical manipulation: The GUI's stunted grammar makes telling difficult, but easy to point around and give context on the screen. (the _where_ and the _when_)
			- Relative Navigation: Use the history and environment to get a good starting point and let the user correct the context. Much better than creating the context from scratch
			- Every user interaction must lead to a discernible change in the contextual graphic design. Similar to the Progress Effect in the Hooked Book.
- Further reading: 
	- [Envisioning Information](https://www.amazon.com/Envisioning-Information-Edward-R-Tufte/dp/0961392118/ref=pd_bxgy_d_sccl_1/130-6976337-8012746?pd_rd_w=KFk9A&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=N06G47RESVBZ2YMYYPR7&pd_rd_wg=udg8a&pd_rd_r=4c9c5a5a-27d1-4a61-9254-363dfa54fbfd&pd_rd_i=0961392118&psc=1)
	- [Design of Everyday Things](https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654/ref=pd_sbs_d_sccl_1_1/130-8802687-9770141?pd_rd_w=4s8Xs&content-id=amzn1.sym.aa738fbd-ad05-4d11-aae2-04b598db6305&pf_rd_p=aa738fbd-ad05-4d11-aae2-04b598db6305&pf_rd_r=GM239HFM31G1SBXMFQ09&pd_rd_wg=XV6s9&pd_rd_r=8eecb04b-a727-44bc-8d0c-73a1c86fc44e&pd_rd_i=0465050654&psc=1)
	- [The Art of Interactive Design](https://www.amazon.com/gp/product/1886411840)
	- [Fundamental of Interactivity](https://www.erasmatazz.com/library/the-journal-of-computer/jcgd-volume-7/fundamentals-of-interactivi.html)


### The What?
- Build information heavy websites with low interaction that are capable of context sensitive graphics. Take inspiration on how those graphics should work like.
### The How?
- Read the book in further reading. 
- The rough idea: (Requires domain expertise ofc)
	- Infer from the context via environment, history or interaction (Algos from ML)
	- Winnow the relevant data 
	- Display them beautifully. (Read the Envisioning Information)
- Take a hands on approach to test software, kink the UX. Identify invisible problems and ask, how do I improve this? how do I make things better? how do I allow the "the user to go where they have not gone before, cognitively" (my principle)
### The Why?
- To allow for better UX
- Context sensitive graphics with low interaction seemingly is the right way to do things because the user is creating and manipulating an internal mental model. Read the article for more. 


### References: 
[[The What, The How, The Why and its TL;DR]]
