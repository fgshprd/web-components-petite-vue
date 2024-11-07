# Web Components + Petite-Vue

NB: I will document the code soon. Here's an overview.

This is an experiment to see how far we can get toward isolated, composable components without required a build-step. 

Downward data-passing is achieved using custom events and native element attributes. Per the standard, this works only for string values. Passing values upward requires event listeners. To pass non-string values downward, you would need to use events to communicate downward and up. 

I have adopted BroadcastChannel to facilitate communication but other approaches are viable.