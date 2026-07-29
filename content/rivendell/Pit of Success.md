#principle #article 
Rico Mariani coined this term in the context of programming languages. According to him higher level languages at the cost of some runtime performance to get a higher likelihood of not falling into _the pit of despair_ and the opportunity to fall into the **pit of success**. 

This principle is extrapolated into the general setting that APIs, GUI interfaces, programming languages should be so designed such that it becomes "obvious" for the user to just pick up the right ways to get shit done and annoying (but not impossible)[^1] to do it in a wrong fashion. It should have [[Design Of Everyday Things|affordances]] which steers its customers to just fall into the right practices. If the user fails it to do so, it seen as the failure of the developer and not the user. 

One way to build such user interfaces might be to take inspiration from game design's [[Vow of Silence]]. Also similar to the constructionist approach in [[Mindstorms]]? 


On a philosophical level, as a designer where do we draw a line in user's complaints about "pits of despair" as a design issue or the users' skill issue. Solving such an issue would generally require tradeoffs as in the case of programming languages too. One heuristic could be to pay heed to number of people who are having such an issue. Having a clear [[Guiding Philosophy]] aids to make better design decisions whether such people are a part of your intended audience or not. Such neglected audience of users could be a potential [[Niche at scale|niche]] to capture!

In the context of programming languages, the pit of despair is generally "memory problems". Higher level languages have automated garbage collection. Rust seems to tackle it with its compile based ownership model. Either way there are tradeoffs. Can we help programmers avoid memory's pit of despair without making tradeoffs? Maybe LLMs might help here?



### Reference:
- [Link to the original article](https://blog.codinghorror.com/falling-into-the-pit-of-success/)

[^1]: We make it difficult but not impossible cause it may happen that a user might find a creative application of your software for a completely different problem which wasn't kept in mind whilst building it. Such a user is most likely a [[Barefoot developer|barefoot developer]]. Also similar to [[Postel's law]] which inspires the software design philosophy of allow all and bless some usecases. Such creative applications of your software are a classic case of latent usage!  