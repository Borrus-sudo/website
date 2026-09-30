 - Lego Model is a system containing a set of primitives and a way to **compose** them together and further abstract them to create more powerful sub-systems on top of them.
### Primitives	

 - The set of primitives are like spanning vectors sets. Just how the linear combination spanning vector set cover the entire vector space, the composition of these primitives should enable a user to achieve their desired goal. 
 - Orthogonality gifts the primitives a lot of expressiveness and compactness. They are fairly easy to learn and can be used to achieve about anything that the user desires.
 - However [effective expressiveness](https://www.inkandswitch.com/malleable-software/effective-expressiveness/) of such a system might be low. This makes our system a Turing Tarpit.
 - We can treat this by adding some redundancy to our primitives. This increases effective expressiveness at the cost of compactness. 
 - Thus good design is finding the correct set of base primitives that maintains a good equilibrium between Orthogonality and [Diagonality](http://number-none.com/product/Lerp,%20Part%201/index.html)
### Composition

- Hedges [writes](https://julesh.com/posts/2017-04-22-on-compositionality.html):
>      Compositionality is the principle that a system should be designed by composing together smaller subsystems, and reasoning about the system should be done recursively on its structure ^015cc3
- The power of the system comes from the fact that various artifacts can be composed together to give rise to more powerful artifacts. A new abstraction of sorts. 
- An added advantage of the compositionality is the ability to use artifacts without understanding how they work underneath. 
- As long as we understand "what" something does, we don't need to bore ourselves with the "how". We can simply use the artifact using its interface and compose it with other components. 
- Be-aware of [[Law of Leaky Abstraction]] and also see [[Abstraction Gradient]]
- Thus good interface design for the artifact plays a key role in how easily it can afford "compositionality". 
	- This interface can take on different forms in different contexts. In software contexts it is generally good [API design](https://youtu.be/ZQ5_u8Lgvyk?si=UtDxnD-YQX6fVnQ8). Building powerful Tools not siloed Apps which can be composed better is the future of computing. See [[Malleable Programming#^313f5f]]. In physical environments, composition is just built in more naturally. This is also the core principle of [Dynamicland](https://dynamicland.org/)
- Compositionality is also the opposite of [Emergent Behavior](https://jzhao.xyz/thoughts/emergent-behaviour). Composable systems are easily analyzable by applying the [reductionist approach](https://en.wikipedia.org/wiki/Reductionism) to systems recursively till we boil them down to their absolute first principles or primitives. Emergent Behavior is fundamentally different because of artifact A and B were composed, their combined effect won't be behaviour(A) + behaviour(B). Instead there would be some additional side-effect behaviour(AB) involed. This makes compositionality extremely important to sciences. [See](https://julesh.com/posts/2017-04-22-on-compositionality.html) to see more into it. 
### Examples in the wild

- [[The Art of UNIX Programming|UNIX Philosophy]] is a massive advocate for the **lego model** style of development.
- Formal systems in mathematics are modelled in a similar fashion. There are established axioms which are composed together with rules of inference into new theorems. These theorems themselves serve as abstracted pieces of knowledge which can be utilized in proofs of other theorems.
- The CPU is essentially built on top of NAND gate primitive. The NAND gate can be composed to build AND, NOR, XOR, OR gates. Layers and layers of such composition and abstraction yields the CPU. [See](https://youtu.be/5rg7xvTJ8SU?si=AIRlpZWaK_u6EL4g)
- [Napolean](https://www.youtube.com/watch?v=E9VfahNloQA) organized his army into small, highly agentic corps which could move very quickly and live off land. During a siege or a major battle, the corps mobilized (composed) into a massive army. This allowed Napolean to surprise his enemies with speed.
- [Spotify's Engineering Culture](https://engineering.atspotify.com/2014/3/spotify-engineering-culture-part-1). 
- The [LISP](https://www.youtube.com/watch?v=-J_xL4IGhJA&list=PLE18841CABEA24090) programming language has a function which does certain computations. These functions can be composed together and abstracted as new functions. 
- [Generative](https://plato.stanford.edu/entries/compositionality/) [semantics](https://thomas-ede-zimmermann.de/course_materials/SemanticsComplete.pdf) in linguistics is also modelled around a similar concept.
- [Compositional game theory](https://www.cs.ox.ac.uk/people/julian.hedges/papers/Thesis.pdf) 
- [[Pattern language]] is structured around the Lego Model design.
- The entire software engineering industry heavily uses this principle!