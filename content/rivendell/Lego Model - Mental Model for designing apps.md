Lego Model is a system containing a set of primitives and a way to **compose** them together and further abstract them to create more powerful sub-systems on top of them. We have explored this model more from the lens of HCI however its inherent structure might be reflected/applied in [[Lego Model - Mental Model for designing apps#^39510a|other cases]] too! Given below is a very abstract take but I conjecture it to be very useful mental model!
### Primitives & Derivatives

 - The set of primitives are like spanning vectors sets. Just how the linear combination spanning vector set cover the entire vector space, the composition of these primitives should enable a user to achieve their desired goal. The primitives can't be further decomposed.
 - It should also be possible to compose the primitives to create derivatives.  
 - Orthogonality is a quality of the primitives where higher orthogonality implies more expressiveness. By learning a small set of primitives, users become armed to do a wide range of things.
 - By only exposing a small set of primitives, the system becomes quite compact which improves learnability for sure. However [effective expressiveness](https://www.inkandswitch.com/malleable-software/effective-expressiveness/) of such a system takes a huge hit. This makes our system a Turing Tarpit. Learnability and the sheer power of such a system might be high but even doing the most common of tasks might require quite a bit of work
 - We can treat this by making our systems more [Diagonal](http://number-none.com/product/Lerp,%20Part%201/index.html). Along with exposing a powerful set of primitives, we introduce commonly used derivatives to make it less time consuming for users to achieve what they want.
 - Thus good design is finding the right balance between orthogonality and diagonality in the initial offering of the primitives and derivatives. Being highly orthogonal might make the system more learnable, but also arduous to do even the most basic of tasks. Being highly diagonal might make a lot of use cases just one step away but also adds too much redundancy to the system taking a toll on the learnability. The user is overloaded by the sheer amount of options. 
### Composition

- Hedges [writes](https://julesh.com/posts/2017-04-22-on-compositionality.html):
>    Compositionality is the principle that a system should be designed by composing together smaller subsystems, and reasoning about the system should be done recursively on its structure ^015cc3
- The power of the system comes from the fact that various primitives can be composed together to give rise to a powerful derivative. A new abstraction of sorts. 
- An added advantage of the compositionality is the ability to use artifacts without understanding how they work underneath. 
- As long as the user understands "what" something does, they don't need to bore themselves with the "how". This reduces the cognitive load!
- Compositionality is also the opposite of [Emergent Behavior](https://jzhao.xyz/thoughts/emergent-behaviour). Composable systems are easily analyzable by applying the [reductionist approach](https://en.wikipedia.org/wiki/Reductionism) to systems recursively till we boil them down to their absolute first principles or primitives. Emergent Behavior is fundamentally different because of artifact A and B were composed, their combined effect won't be behaviour(A) + behaviour(B). Instead there would be some additional side-effect behaviour(AB) involed. This makes compositionality extremely important to sciences. [See](https://julesh.com/posts/2017-04-22-on-compositionality.html) to see more into it. 
## Strengths

- This model is a nice way to implement the philosophy of [design with materials not features](https://thesephist.com/posts/materials/)
- Developing a good Lego Model for the app is also similar to Alexander Grothendiecks's "[mansions approach](https://www.thebigquestions.com/2014/11/13/the-rising-sea/)". Instead of building a list of features, you design a Lego Model like system which have primitives (materials) where these features are automatically represented in the system. This is analogous to the Rising Sea metaphor too. Instead of your apps supporting a few chisel-kind of ways to break a chest-nut, you have an ocean available which can soften the chest-nut such that it can break by applying hand pressure. Your app designed with a lego model architecture is such an ocean! 
- Learnability also comes for free due to the structured imposed by compositionality. The combinatorics of compositionality would arm the user with a range of functionality! 
## Limitations

- Malleability of the primitives is a bottle-neck in such a system. You are limited by the primitives that the system provides. If the user wants a fusion of the primitives or include the system to have a new kind of primitive, it becomes a non-trivial issue.  
	- If the primitives are parameterized, maybe this issue can mitigated a bit. For example if you have a drawing app, instead of providing a way to draw a parabola, you can introduce a primitive to draw a conic. This primitive is parameterized so it can take the shape of drawing a circle, hyperbola, parabola, ellipse each of which are a good candidate for a derivative. However it won't be possible for the user to draw a new kind of curve without changing the underlying source[^1].  Take a look at [[Malleable Programming]]
	- Coding agents changing the source code in real time could be a possible future too. 
### Examples in the wild reflecting this model in strong and loose ways 
^39510a

- [[The Art of UNIX Programming|UNIX Philosophy]] is a massive advocate for the **lego model** style of development.
- Formal systems in mathematics are modelled in a similar fashion. There are established axioms which are composed together with rules of inference into new theorems. These theorems themselves serve as abstracted pieces of knowledge which can be utilized in proofs of other theorems.
- The CPU is essentially built on top of NAND gate primitive. The NAND gate can be composed to build AND, NOR, XOR, OR gates. Layers and layers of such composition and abstraction yields the CPU. [See](https://youtu.be/5rg7xvTJ8SU?si=AIRlpZWaK_u6EL4g)
- [Napolean](https://www.youtube.com/watch?v=E9VfahNloQA) organized his army into small, highly agentic corps which could move very quickly and live off land. During a siege or a major battle, the corps mobilized (composed) into a massive army. This allowed Napolean to surprise his enemies with speed.
- [Spotify's Engineering Culture](https://engineering.atspotify.com/2014/3/spotify-engineering-culture-part-1). 
- The [LISP](https://www.youtube.com/watch?v=-J_xL4IGhJA&list=PLE18841CABEA24090) programming language has a function which does certain computations. These functions can be composed together and abstracted as new functions. 
- [Generative](https://plato.stanford.edu/entries/compositionality/) [semantics](https://thomas-ede-zimmermann.de/course_materials/SemanticsComplete.pdf) in linguistics is also modelled around a similar concept.
- [Compositional game theory](https://www.cs.ox.ac.uk/people/julian.hedges/papers/Thesis.pdf) 
- [[Pattern language]] is structured around the Lego Model design.
- [API design principles](https://youtu.be/ZQ5_u8Lgvyk?si=UtDxnD-YQX6fVnQ8), [Dynamicland](https://dynamicland.org/), [Concept Oriented Design](https://essenceofsoftware.com/posts/wysiwid/) and [Code Mirror Plugin System](https://codemirror.net/docs/guide/)


[^1]: Maybe the lego model like application is itself powered by a lego model like plugin system which provides primitives for introducing new primitives to the app. This certainly makes the app more powerful but the the same limitation would apply to the underlying plugin like lego model. 

