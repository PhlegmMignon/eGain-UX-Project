Assumptions: Admin can edit my code.

Since I'm mocking all server inputs, I'm using GitHub Pages instead of deploying a backend service to something like Fly.io.

I chose iframes over web components to ensure full isolation and make it easier for others to embed and test the widget. Here’s a quick comparison:

Iframe
Pros:
Full isolation
Easy to embed
No risk of style or script conflicts

Cons:
Harder to pass data
Longer loads

Web Component
Pros:
Seamless integration with host page
Easy to pass props and emit events
Feels like a native HTML element

Cons:
Requires careful style scoping
More complex to build and distribute
Potential for conflicts with host styles or scripts

To replicate this project...deploy/build

If I had more time:
Media queries. Middle screen sizes have awkward paddings.
Feedback section could be styled better.
Questions dynamic format. Chose to hard code for simplicity and time constraints
Assessibility
